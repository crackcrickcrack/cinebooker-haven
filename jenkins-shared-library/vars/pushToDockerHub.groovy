
#!/usr/bin/env groovy

def call(String imageName, String registryCredentialsId) {
    echo "Pushing Docker image to Docker Hub..."
    
    withCredentials([usernamePassword(credentialsId: registryCredentialsId, 
                     usernameVariable: 'DOCKER_USER', 
                     passwordVariable: 'DOCKER_PASSWORD')]) {
        sh """
            echo ${DOCKER_PASSWORD} | docker login docker.io -u ${DOCKER_USER} --password-stdin
            docker push ${imageName}
        """
    }
}
