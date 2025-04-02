
pipeline {
    agent {
        kubernetes {
            // Use the Kubernetes plugin to run on a dynamic agent
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                  containers:
                  - name: node
                    image: node:20-alpine
                    command:
                    - cat
                    tty: true
                  - name: docker
                    image: docker:24.0.6-dind
                    command:
                    - cat
                    tty: true
                    privileged: true
                    volumeMounts:
                    - name: docker-socket
                      mountPath: /var/run/docker.sock
                  - name: trivy
                    image: aquasec/trivy:latest
                    command:
                    - cat
                    tty: true
                  - name: sonar-scanner
                    image: sonarsource/sonar-scanner-cli:latest
                    command:
                    - cat
                    tty: true
                  volumes:
                  - name: docker-socket
                    hostPath:
                      path: /var/run/docker.sock
            '''
            defaultContainer 'node'
        }
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'DOCKER_TAG', defaultValue: 'latest', description: 'Docker image tag')
        string(name: 'DOCKER_REGISTRY', defaultValue: 'docker.io', description: 'Docker registry')
        string(name: 'DOCKER_REPO', defaultValue: 'yourusername/cinebooker', description: 'Docker repository')
        string(name: 'SONAR_PROJECT_KEY', defaultValue: 'cinebooker', description: 'SonarQube project key')
        booleanParam(name: 'SKIP_TESTS', defaultValue: false, description: 'Skip running tests')
        booleanParam(name: 'SKIP_SONAR', defaultValue: false, description: 'Skip SonarQube analysis')
    }

    environment {
        // Define environment variables
        DOCKER_IMAGE = "${params.DOCKER_REGISTRY}/${params.DOCKER_REPO}:${params.DOCKER_TAG}"
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials') // Create this credential in Jenkins
        SONAR_TOKEN = credentials('sonar-token') // Create this credential in Jenkins
        SONAR_HOST_URL = 'https://sonarqube.your-domain.com' // Replace with your SonarQube instance URL
        NODE_ENV = 'production'
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
                        url: 'https://github.com/yourusername/cinebooker.git', // Replace with your repo URL
                        credentialsId: 'github-credentials' // Create this credential in Jenkins
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm ci'
            }
        }

        stage('Unit Tests') {
            when {
                expression { return !params.SKIP_TESTS }
            }
            steps {
                echo "Running unit tests..."
                sh 'npm test -- --coverage'
            }
            post {
                always {
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
            }
        }

        stage('Code Quality Analysis') {
            when {
                expression { return !params.SKIP_SONAR }
            }
            steps {
                container('sonar-scanner') {
                    echo "Running SonarQube analysis..."
                    sh """
                        sonar-scanner \
                        -Dsonar.projectKey=${params.SONAR_PROJECT_KEY} \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=${SONAR_TOKEN} \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.exclusions=node_modules/**,coverage/**,public/**,dist/**
                    """
                }
            }
        }

        stage('Security Scanning - Source Code') {
            steps {
                container('sonar-scanner') {
                    echo "Running security scan on source code..."
                    // SonarQube already includes security scanning, but you can add additional tools
                    sh """
                        sonar-scanner \
                        -Dsonar.projectKey=${params.SONAR_PROJECT_KEY}-security \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=${SONAR_TOKEN} \
                        -Dsonar.exclusions=node_modules/**,coverage/**,public/**,dist/** \
                        -Dsonar.analysis.mode=preview
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                container('docker') {
                    echo "Building Docker image: ${DOCKER_IMAGE}"
                    sh """
                        docker build -t ${DOCKER_IMAGE} \
                        --build-arg NODE_ENV=${NODE_ENV} \
                        --no-cache .
                    """
                }
            }
        }

        stage('Security Scanning - Docker Image') {
            steps {
                container('trivy') {
                    echo "Scanning Docker image for vulnerabilities..."
                    sh """
                        trivy image ${DOCKER_IMAGE} \
                        --format json \
                        --output trivy-results.json
                    """
                    
                    // Archive scan results
                    archiveArtifacts artifacts: 'trivy-results.json', fingerprint: true
                    
                    // Optional: Fail build on high severity vulnerabilities
                    sh """
                        trivy image ${DOCKER_IMAGE} \
                        --exit-code 1 \
                        --severity HIGH,CRITICAL
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                container('docker') {
                    echo "Pushing Docker image to Docker Hub..."
                    sh """
                        echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login ${params.DOCKER_REGISTRY} -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin
                        docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace..."
            container('docker') {
                sh """
                    docker rmi ${DOCKER_IMAGE} || true
                    docker system prune -f || true
                """
            }
            cleanWs()
        }
        success {
            echo "Pipeline completed successfully!"
            // Optional: Add notification steps (email, Slack, etc.)
            // slackSend(color: 'good', message: "Build successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
        }
        failure {
            echo "Pipeline failed!"
            // Optional: Add notification steps (email, Slack, etc.)
            // slackSend(color: 'danger', message: "Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
        }
    }
}
