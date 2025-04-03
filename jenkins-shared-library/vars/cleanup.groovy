
#!/usr/bin/env groovy

def call(String imageName) {
    echo "Cleaning up workspace and Docker resources..."
    
    sh """
        # Remove the built Docker image to save space
        docker rmi ${imageName} || true
        
        # Prune dangling images and containers
        docker image prune -f
        docker container prune -f
        
        # Clean workspace
        rm -rf node_modules dist coverage
    """
    
    // Clean workspace using Jenkins built-in
    cleanWs()
}
