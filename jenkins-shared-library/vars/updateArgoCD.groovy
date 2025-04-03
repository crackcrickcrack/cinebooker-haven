
#!/usr/bin/env groovy

def call(String imageName, String argocdUpdaterUrl) {
    echo "Notifying ArgoCD Image Updater about new image..."
    
    sh """
        curl -X POST ${argocdUpdaterUrl}/api/v1/applications/cinebooker/images \
        -H 'Content-Type: application/json' \
        -d '{
            "image": "${imageName}",
            "force": true
        }'
    """
    
    // Verify deployment started (optional)
    sh """
        # Wait for ArgoCD to start the update
        sleep 10
        curl -s ${argocdUpdaterUrl}/api/v1/applications/cinebooker/status | grep -q "Syncing"
    """
}
