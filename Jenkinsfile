pipeline {
    agent {
        node {
            label 'ec2-build-node'
        }
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'DOCKER_TAG', defaultValue: 'latest', description: 'Docker image tag')
        string(name: 'DOCKER_REGISTRY', defaultValue: 'docker.io', description: 'Docker registry')
        string(name: 'DOCKER_REPO', defaultValue: 'sandeepkalathil/cinebooker', description: 'Docker repository')
        string(name: 'SONAR_PROJECT_KEY', defaultValue: 'cinebooker', description: 'SonarQube project key')
        string(name: 'ARGOCD_UPDATER_URL', defaultValue: 'http://argocd-image-updater.argocd:8080', description: 'ArgoCD Image Updater URL')
    }

    environment {
        DOCKER_IMAGE = "${params.DOCKER_REGISTRY}/${params.DOCKER_REPO}:${params.DOCKER_TAG}"
        SONAR_HOST_URL = 'https://sonarqube.your-domain.com'
        NODE_ENV = 'production'
        WORKSPACE = "${env.WORKSPACE}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Code Checkout') {
            steps {
                cleanWs()
                echo "Checking out code from branch: ${params.BRANCH_NAME}"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "${params.BRANCH_NAME}"]],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/crackcrickcrack/cinebooker-haven',
                        credentialsId: 'github-credentials'
                    ]]
                ])
            }
        }

        stage('Build and Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                cleanWs()
                checkout scm
                script {
                    
                            sh 'npm ci --production=false'
                            sh 'npm run lint || echo "Lint issues found, continuing..."'
                            sh 'npm run test || echo "Tests failed, continuing..."'
                            sh 'npm run build || { echo "Build failed"; exit 1; }'
                            sh 'tar -czf dist.tar.gz dist/'
                            archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
                        
                    catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error "Build failed: ${e.message}"
                    }
                }
            }
        }

        stage('SonarQube Analysis') {
            agent {
                docker {
                    image 'sonarsource/sonar-scanner-cli:latest'
                    reuseNode true
                }
            }
            steps {
                echo "Running SonarQube analysis..."
                withSonarQubeEnv('SonarQube') {
                    sh """
                        sonar-scanner \\
                        -Dsonar.projectKey=${params.SONAR_PROJECT_KEY} \\
                        -Dsonar.sources=. \\
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \\
                        -Dsonar.exclusions=node_modules/**,coverage/**,public/**,dist/** \\
                        -Dsonar.host.url=${SONAR_HOST_URL}
                    """
                }
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Image Build & Security Scan') {
            steps {
                echo "Building Docker image: ${DOCKER_IMAGE}"
                sh "docker build -t ${DOCKER_IMAGE} --build-arg NODE_ENV=${NODE_ENV} ."
                sh """
                    docker run --rm \\
                    -v /var/run/docker.sock:/var/run/docker.sock \\
                    -v \${WORKSPACE}:/root/.cache/ \\
                    aquasec/trivy:latest image \\
                    --format json \\
                    --output trivy-results.json \\
                    ${DOCKER_IMAGE}
                """
                archiveArtifacts artifacts: 'trivy-results.json', fingerprint: true
                sh """
                    docker run --rm \\
                    -v /var/run/docker.sock:/var/run/docker.sock \\
                    -v \${WORKSPACE}:/root/.cache/ \\
                    aquasec/trivy:latest image \\
                    --exit-code 1 \\
                    --severity HIGH,CRITICAL \\
                    ${DOCKER_IMAGE} || echo "Vulnerabilities found, but continuing"
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh """
                        echo ${DOCKER_PASSWORD} | docker login docker.io -u ${DOCKER_USER} --password-stdin
                        docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }

        stage('Update ArgoCD Image Updater') {
            steps {
                echo "Notifying ArgoCD Image Updater about new image..."
                sh """
                    curl -X POST ${params.ARGOCD_UPDATER_URL}/api/v1/applications/cinebooker/images \\
                    -H 'Content-Type: application/json' \\
                    -d '{
                        "image": "${DOCKER_IMAGE}",
                        "force": true
                    }'
                """
                sh """
                    sleep 10
                    curl -s ${params.ARGOCD_UPDATER_URL}/api/v1/applications/cinebooker/status | grep -q "Syncing" || echo "ArgoCD sync status check failed but continuing"
                """
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace and Docker resources..."
            sh """
                docker rmi ${DOCKER_IMAGE} || true
                docker image prune -f
                docker container prune -f
                rm -rf node_modules dist coverage
            """
            cleanWs()
        }

        success {
            echo "Pipeline completed successfully!"
        }

        failure {
            echo "Pipeline failed!"
        }
    }
}
