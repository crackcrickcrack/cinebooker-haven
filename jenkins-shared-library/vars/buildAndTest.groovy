
#!/usr/bin/env groovy

def call() {
    echo "Installing dependencies and running tests..."
    sh 'npm ci'
    sh 'npm run lint || echo "Linting issues found but continuing"'
    sh 'npm test -- --coverage || { echo "Tests failed"; exit 1; }'
    sh 'npm run build'
    
    // Publish test reports
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
