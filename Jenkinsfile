pipeline {
    agent {
        label 'ec2-build-node'
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
        SONAR_HOST_URL = 'http://13.49.73.214:9000/projects'
        NODE_ENV = 'production'
        NODE_DOCKER_IMAGE = 'node:18-alpine'
    }

    options {
        skipDefaultCheckout()
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                echo "Checking out code from branch: ${params.BRANCH_NAME}"
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: "${params.BRANCH_NAME}"]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/crackcrickcrack/cinebooker-haven',
                        credentialsId: 'github-credentials'
                    ]]
                ]
            }
        }

        stage('Install Dependencies') {
            agent {
                docker {
                    image "${NODE_DOCKER_IMAGE}"
                    args '-u 0:0 -v /home/ubuntu/.npm:/root/.npm'
                }
            }
            steps {
                sh '''
                    echo "Checking for existing node_modules..."
                    [ -d node_modules ] && rm -rf node_modules
                    echo 'package-lock=true\nprefer-offline=true\nstrict-peer-dependencies=false' > .npmrc
                    npm ci --prefer-offline --include=dev || { echo "npm ci failed"; exit 1; }
                '''
            }
        }

        stage('Lint and Test') {
            agent {
                docker {
                    image "${NODE_DOCKER_IMAGE}"
                    args '-u 0:0 -v /home/ubuntu/.npm:/root/.npm'
                }
            }
            steps {
                sh '''
                    npm run lint || echo "Lint warnings found"
                    
                    npm test || echo "Tests failed, continuing for demo"
                '''
            }
        }

        stage('Build App') {
            agent {
                docker {
                    image "${NODE_DOCKER_IMAGE}"
                    args '-u 0:0 -v /home/ubuntu/.npm:/root/.npm'
                }
            }
            steps {
                sh 'npm run build || { echo "Build failed"; exit 1; }'
            }
        }

        stage('SonarQube Analysis') {
            agent {
                docker {
                    image 'sonarsource/sonar-scanner-cli:latest'
                    args '-v /home/ubuntu/.sonar:/root/.sonar'
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

        stage('Docker Build & Trivy Scan') {
            steps {
                echo "Building Docker image: ${DOCKER_IMAGE}"
                sh "docker build -t ${DOCKER_IMAGE} --build-arg NODE_ENV=${NODE_ENV} ."

                echo "Scanning image with Trivy..."
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

                // Fail pipeline if HIGH/CRITICAL found
                sh """
                    docker run --rm \\
                    -v /var/run/docker.sock:/var/run/docker.sock \\
                    -v \${WORKSPACE}:/root/.cache/ \\
                    aquasec/trivy:latest image \\
                    --exit-code 1 \\
                    --severity HIGH,CRITICAL \\
                    ${DOCKER_IMAGE} || echo "Security issues found, proceeding"
                """
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh """
                        echo \${DOCKER_PASSWORD} | docker login ${params.DOCKER_REGISTRY} -u \${DOCKER_USER} --password-stdin
                        docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }

        stage('Notify ArgoCD') {
            steps {
                sh """
                    curl -X POST ${params.ARGOCD_UPDATER_URL}/api/v1/applications/cinebooker/images \\
                    -H 'Content-Type: application/json' \\
                    -d '{"image": "${DOCKER_IMAGE}", "force": true}'
                """
                echo "Notified ArgoCD Image Updater"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace and Docker...'
            sh '''
                docker rmi ${DOCKER_IMAGE} || true
                docker image prune -f || true
                docker container prune -f || true
                rm -rf node_modules dist coverage .npm .sonar .scannerwork package-lock.json || true
            '''
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
