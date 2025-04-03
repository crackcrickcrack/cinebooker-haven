
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
        SONAR_HOST_URL = 'https://sonarqube.your-domain.com'
        NODE_ENV = 'production'
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
                buildAndTest()
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
                sonarAnalysis(params.SONAR_PROJECT_KEY, env.SONAR_HOST_URL)
            }
        }

        stage('Docker Image Build & Security Scan') {
            steps {
                buildDockerImage(env.DOCKER_IMAGE, env.NODE_ENV)
            }
        }

        stage('Push to Docker Hub') {
            steps {
                pushToDockerHub(env.DOCKER_IMAGE, 'docker-hub-credentials')
            }
        }

        stage('Update ArgoCD Image Updater') {
            steps {
                updateArgoCD(env.DOCKER_IMAGE, params.ARGOCD_UPDATER_URL)
            }
        }
    }

    post {
        always {
            cleanup(env.DOCKER_IMAGE)
        }
        
        success {
            echo "Pipeline completed successfully!"
            // You can add notification steps here (Slack, Email, etc.)
        }
        
        failure {
            echo "Pipeline failed!"
            // You can add notification steps here (Slack, Email, etc.)
        }
    }
}
