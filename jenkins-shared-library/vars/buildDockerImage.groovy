
#!/usr/bin/env groovy

def call(String imageName, String nodeEnv) {
    echo "Building Docker image: ${imageName}"
    
    // Build Docker image
    sh "docker build -t ${imageName} --build-arg NODE_ENV=${nodeEnv} ."
    
    // Scan the image with Trivy
    sh """
        docker run --rm \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -v \${WORKSPACE}:/root/.cache/ \
        aquasec/trivy:latest image \
        --format json \
        --output trivy-results.json \
        ${imageName}
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
        ${imageName} || echo "Vulnerabilities found, but continuing"
    """
}
