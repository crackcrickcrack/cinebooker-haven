
#!/usr/bin/env groovy

def call() {
    echo "Installing dependencies and running tests..."
    sh 'npm ci'
    
    // Make sure ESLint and Vitest are installed explicitly
    sh 'npm install --no-save @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh vite @vitejs/plugin-react-swc vitest'
    
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
