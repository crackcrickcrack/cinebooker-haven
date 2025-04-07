
#!/usr/bin/env groovy

def call() {
    echo "Installing dependencies and running tests..."
    
    // Install all dependencies
    sh 'npm ci'
    
    // Run linting with npx to ensure the local eslint is used
    sh 'npx eslint . || echo "Linting issues found but continuing"'
    
    // Run tests with npx to ensure vitest is found
    // No need to install specific versions as we're using what's in package.json
    sh 'npx vitest run || { echo "Tests failed"; exit 1; }'
    
    // Build the application
    sh 'npm run build'
    
    // Publish test reports if they exist
    sh '[ -d "coverage" ] && [ -f "coverage/junit.xml" ] && junit "coverage/junit.xml" || echo "No test reports to publish"'
    sh '[ -d "coverage" ] && [ -f "coverage/index.html" ] && publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: "coverage", reportFiles: "index.html", reportName: "Coverage Report"]) || echo "No coverage report to publish"'
}
