
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
        string(name: 'DOCKER_REPO', defaultValue: 'yourusername/cinebooker', description: 'Docker repository')
        string(name: 'SONAR_PROJECT_KEY', defaultValue: 'cinebooker', description: 'SonarQube project key')
        string(name: 'ARGOCD_UPDATER_URL', defaultValue: 'http://argocd-image-updater.argocd:8080', description: 'ArgoCD Image Updater URL')
    }

    environment {
        DOCKER_IMAGE = "${params.DOCKER_REGISTRY}/${params.DOCKER_REPO}:${params.DOCKER_TAG}"
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
        SONAR_CREDENTIALS = credentials('sonar-token')
        SONAR_HOST_URL = 'https://sonarqube.your-domain.com'
        NODE_ENV = 'production'
        // Use a unique workspace to avoid conflicts
        WORKSPACE = "${env.WORKSPACE}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Code Checkout') {
            steps {
                // Clean workspace before checkout
                cleanWs()
                
                echo "Checking out code from branch: ${params.BRANCH_NAME}"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "${params.BRANCH_NAME}"]],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/yourusername/cinebooker.git',
                        credentialsId: 'github-credentials'
                    ]]
                ])
            }
        }

        stage('Build & Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "Installing dependencies and running tests..."
                sh 'npm ci'
                sh 'npm run lint || echo "Linting issues found but continuing"'
                sh 'npm test -- --coverage || { echo "Tests failed"; exit 1; }'
                sh 'npm run build'
            }
            post {
                success {
                    echo "Build and tests completed successfully"
                    junit 'coverage/junit.xml'
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
                failure {
                    echo "Build or tests failed"
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
                        sonar-scanner \
                        -Dsonar.projectKey=${params.SONAR_PROJECT_KEY} \
                        -Dsonar.sources=. \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.exclusions=node_modules/**,coverage/**,public/**,dist/** \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=${SONAR_CREDENTIALS_PSW}
                    """
                }
                
                // Quality Gate check
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Image Build & Security Scan') {
            steps {
                echo "Building and scanning Docker image: ${DOCKER_IMAGE}"
                
                // Build Docker image
                sh "docker build -t ${DOCKER_IMAGE} --build-arg NODE_ENV=${NODE_ENV} ."
                
                // Scan the image with Trivy
                sh """
                    docker run --rm \
                    -v /var/run/docker.sock:/var/run/docker.sock \
                    -v \${WORKSPACE}:/root/.cache/ \
                    aquasec/trivy:latest image \
                    --format json \
                    --output trivy-results.json \
                    ${DOCKER_IMAGE}
                """
                
                // Archive scan results
                archiveArtifacts artifacts: 'trivy-results.json', fingerprint: true
                
                // Optional: Fail build on high severity vulnerabilities
                sh """
                    docker run --rm \
                    -v /var/run/docker.sock:/var/run/docker.sock \
                    -v \${WORKSPACE}:/root/.cache/ \
                    aquasec/trivy:latest image \
                    --exit-code 1 \
                    --severity HIGH,CRITICAL \
                    ${DOCKER_IMAGE} || echo "Vulnerabilities found, but continuing"
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                sh """
                    echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login ${params.DOCKER_REGISTRY} -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin
                    docker push ${DOCKER_IMAGE}
                """
            }
        }

        stage('Update ArgoCD Image Updater') {
            steps {
                echo "Notifying ArgoCD Image Updater about new image..."
                sh """
                    curl -X POST ${params.ARGOCD_UPDATER_URL}/api/v1/applications/cinebooker/images \
                    -H 'Content-Type: application/json' \
                    -d '{
                        "image": "${DOCKER_IMAGE}",
                        "force": true
                    }'
                """
                
                // Verify deployment started (optional)
                sh """
                    # Wait for ArgoCD to start the update
                    sleep 10
                    curl -s ${params.ARGOCD_UPDATER_URL}/api/v1/applications/cinebooker/status | grep -q "Syncing"
                """
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace and Docker resources..."
            sh """
                # Remove the built Docker image to save space
                docker rmi ${DOCKER_IMAGE} || true
                
                # Prune dangling images and containers
                docker image prune -f
                docker container prune -f
                
                # Clean workspace
                rm -rf node_modules dist coverage
            """
            cleanWs()
        }
        
        success {
            echo "Pipeline completed successfully!"
            // You can add notification steps here (Slack, Email, etc.)
            // slackSend(color: 'good', message: "Build successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
        }
        
        failure {
            echo "Pipeline failed!"
            // You can add notification steps here (Slack, Email, etc.)
            // slackSend(color: 'danger', message: "Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
        }
    }
}
