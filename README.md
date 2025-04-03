
# CineBooker - Cinema Booking Application

A modern cinema ticket booking application built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Development Setup](#development-setup)
- [Deployment Options](#deployment-options)
  - [Standalone Docker Container](#standalone-docker-container)
  - [Kubernetes Deployment](#kubernetes-deployment)
    - [Manual Kubernetes Deployment](#manual-kubernetes-deployment)
    - [ArgoCD Deployment](#argocd-deployment)
  - [Jenkins CI/CD Pipeline](#jenkins-cicd-pipeline)
- [Architecture](#architecture)
- [Troubleshooting](#troubleshooting)

## Overview

CineBooker is a web application for movie ticket booking that allows users to:
- Browse movie listings
- View movie details
- Select showtimes
- Choose seats
- Complete bookings

## Development Setup

To set up the development environment:

```bash
# Clone the repository
git clone https://github.com/yourusername/cinebooker.git
cd cinebooker

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment Options

### Standalone Docker Container

To deploy CineBooker as a standalone Docker container:

1. **Build the Docker image:**

```bash
docker build -t cinebooker:latest .
```

2. **Run the container:**

```bash
docker run -d -p 80:80 --name cinebooker cinebooker:latest
```

3. **Access the application:**

Open your browser and navigate to `http://localhost:80`

### Kubernetes Deployment

#### Manual Kubernetes Deployment

To deploy CineBooker on Kubernetes manually:

1. **Create the namespace:**

```bash
kubectl apply -f k8s/namespace.yaml
```

2. **Apply the configuration:**

```bash
kubectl apply -f k8s/configmap.yaml
```

3. **Deploy the application:**

```bash
kubectl apply -f k8s/deployment.yaml
```

4. **Create the service:**

```bash
kubectl apply -f k8s/service.yaml
```

5. **Configure the ingress:**

```bash
kubectl apply -f k8s/ingress.yaml
```

6. **Verify the deployment:**

```bash
kubectl -n cinebooker get all
kubectl -n cinebooker get ingress
```

#### ArgoCD Deployment

To deploy using ArgoCD (GitOps approach):

1. **Ensure ArgoCD is installed on your cluster:**

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

2. **Apply the ArgoCD application manifest:**

```bash
kubectl apply -f argocd/application.yaml
```

3. **Monitor the deployment in ArgoCD UI:**

```bash
# Port forward to access ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Access the UI at http://localhost:8080
# Default credentials: username: admin, password: (can be obtained with:)
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

4. **The application will be automatically synced and deployed by ArgoCD**

### Jenkins CI/CD Pipeline

To set up the CI/CD pipeline with Jenkins:

1. **Prerequisites:**
   - Jenkins server with pipeline support
   - Docker installed on Jenkins nodes
   - Node.js installed on Jenkins nodes
   - SonarQube server for code quality analysis
   - Access to Docker Hub or another container registry
   - Kubernetes cluster with ArgoCD installed

2. **Jenkins Configuration:**
   - Create credentials in Jenkins for:
     - GitHub access (`github-credentials`)
     - Docker Hub access (`docker-hub-credentials`)
     - SonarQube access (`sonar-token`)

3. **Set up the pipeline:**
   - Create a new Pipeline job in Jenkins
   - Configure it to use the Jenkinsfile from the repository
   - Specify the branch to build (default: `main`)

4. **Configure Pipeline Parameters:**
   - `BRANCH_NAME`: Git branch to build (default: `main`)
   - `DOCKER_TAG`: Docker image tag (default: `latest`)
   - `DOCKER_REGISTRY`: Docker registry (default: `docker.io`)
   - `DOCKER_REPO`: Docker repository (default: `yourusername/cinebooker`)
   - `SONAR_PROJECT_KEY`: SonarQube project key (default: `cinebooker`)
   - `ARGOCD_UPDATER_URL`: ArgoCD Image Updater URL

5. **Run the pipeline:**
   - The pipeline will:
     - Check out code from the git repository
     - Install dependencies and run tests
     - Analyze code with SonarQube
     - Build and scan a Docker image
     - Push the image to Docker Hub
     - Notify ArgoCD Image Updater to deploy the new version

6. **Continuous Deployment with ArgoCD:**
   - ArgoCD Image Updater will detect the new image
   - ArgoCD will automatically deploy the new version to the Kubernetes cluster

## Architecture

The CineBooker deployment architecture consists of:

- **Frontend**: React application served by Nginx
- **Infrastructure**:
  - Docker container for application packaging
  - Kubernetes for orchestration
  - ArgoCD for GitOps-based continuous delivery
  - Jenkins for CI/CD pipeline

The application is deployed as follows:
1. Code is built and tested in the CI/CD pipeline
2. A Docker image is created and pushed to Docker Hub
3. ArgoCD deploys the application to Kubernetes
4. Nginx serves the static files to users

## Troubleshooting

### Docker Issues:
- **Container not starting**: Check Docker logs with `docker logs cinebooker`
- **Image not found**: Verify the image exists with `docker images`

### Kubernetes Issues:
- **Pods not running**: Check pod status with `kubectl -n cinebooker get pods`
- **Service issues**: Verify service with `kubectl -n cinebooker describe service cinebooker`
- **Ingress problems**: Check ingress with `kubectl -n cinebooker describe ingress cinebooker`

### Jenkins Pipeline Issues:
- Check Jenkins console output for detailed error messages
- Verify credentials are correctly set up in Jenkins
- Ensure Jenkins has sufficient permissions to access required resources

### ArgoCD Issues:
- Check application status in ArgoCD UI
- Verify Git repository access and configuration
- Check ArgoCD logs with `kubectl -n argocd logs -l app.kubernetes.io/name=argocd-server`
