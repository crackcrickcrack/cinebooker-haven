
# Kubernetes Deployment Guide

This guide describes how to deploy CineBooker on a Kubernetes cluster manually.

## Prerequisites

- Kubernetes cluster up and running
- `kubectl` configured to connect to your cluster
- Basic knowledge of Kubernetes concepts

## Manual Kubernetes Deployment

### 1. Create the namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

This creates a dedicated namespace called `cinebooker` for the application.

### 2. Apply the configuration

```bash
kubectl apply -f k8s/configmap.yaml
```

This creates a ConfigMap with the necessary configuration parameters.

### 3. Deploy the application

```bash
kubectl apply -f k8s/deployment.yaml
```

This creates a Deployment that runs the CineBooker application with 2 replicas.

### 4. Create the service

```bash
kubectl apply -f k8s/service.yaml
```

This creates a Service that exposes the application within the cluster.

### 5. Configure the ingress

```bash
kubectl apply -f k8s/ingress.yaml
```

This creates an Ingress resource that exposes the application to external traffic.

### 6. Verify the deployment

```bash
kubectl -n cinebooker get all
kubectl -n cinebooker get ingress
```

These commands show the status of all resources in the `cinebooker` namespace and the Ingress configuration.

## Scaling the Application

To scale the number of application instances:

```bash
kubectl -n cinebooker scale deployment cinebooker --replicas=5
```

## Updating the Application

To update the application to a new version:

```bash
# Update the image in the deployment
kubectl -n cinebooker set image deployment/cinebooker cinebooker=docker.io/yourusername/cinebooker:new-version

# Verify the rollout status
kubectl -n cinebooker rollout status deployment/cinebooker
```

## Cleaning Up

To remove all resources:

```bash
kubectl delete namespace cinebooker
```

This removes the namespace and all resources within it.
