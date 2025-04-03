
#!/usr/bin/env groovy

def call(String projectKey, String sonarHostUrl) {
    echo "Running SonarQube analysis..."
    withSonarQubeEnv('SonarQube') {
        sh """
            sonar-scanner \
            -Dsonar.projectKey=${projectKey} \
            -Dsonar.sources=. \
            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
            -Dsonar.exclusions=node_modules/**,coverage/**,public/**,dist/** \
            -Dsonar.host.url=${sonarHostUrl}
        """
    }
    
    // Quality Gate check
    timeout(time: 2, unit: 'MINUTES') {
        waitForQualityGate abortPipeline: true
    }
}
