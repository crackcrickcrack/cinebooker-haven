
#!/usr/bin/env groovy

def call() {
    echo "Installing dependencies and running tests..."
    sh 'npm ci'
    
    // Updated commands to use npx to run locally installed binaries
    sh 'npx eslint . || echo "Linting issues found but continuing"'
    sh 'npx vitest run --coverage || { echo "Tests failed"; exit 1; }'
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
