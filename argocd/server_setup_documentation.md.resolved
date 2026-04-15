# Server Infrastructure & Setup Documentation

This document provides a detailed overview of the current server configuration, Kubernetes cluster state, and deployed services as of April 15, 2026.

## 1. Core Infrastructure
- **Provider**: AWS EC2
- **Public IP**: `3.108.41.155`
- **Internal IP**: `172.31.47.168`
- **Operating System**: Ubuntu 24.04.4 LTS
- **Kernel**: `6.17.0-1007-aws`

## 2. Kubernetes Cluster (K3s)
- **Distribution**: K3s (`v1.34.6+k3s1`)
- **Node Role**: Single-node cluster (control-plane, master)
- **Container Runtime**: `containerd://2.2.2`
- **Network Plugin**: K3s default (Flannel)
- **Storage Class**: `local-path` (default)

## 3. Ingress & Traffic Management
- **Primary Ingress Controller**: Traefik (v3.6.10)
  - **Service Type**: LoadBalancer (binding to host ports 80/443 via `svclb-traefik`)
  - **Entrypoints**: `web` (80), `websecure` (443)
- **SSL/TLS Management**: 
  - **Provider**: cert-manager (v1.x)
  - **ClusterIssuer**: `letsencrypt-prod` (configured for automated SSL)
  - **Cloudflare Interaction**: DNS/Traffic is proxied through Cloudflare.

## 4. Deployed Services

### Namespace: `argocd`
ArgoCD is the primary GitOps tool running on this cluster.
- **Access URL**: `https://argocd.fawasam.in`
- **Key Components**:
  - `argocd-server`: Manages the UI and API. Runs with `--insecure` to handle TLS termination at the Ingress level.
  - `argocd-repo-server`: Handles git repository connections and manifest generation.
  - `argocd-application-controller`: Synchronizes application state.
  - `argocd-applicationset-controller`: Automates multi-app deployments (Fixed: CRDs recently added).
  - `argocd-redis`: Cache for repository data.
  - `argocd-dex-server`: Identity provider for SSO.

### Namespace: `default`
- **Service**: `gitops-app`
  - **Type**: ClusterIP
  - **Image**: `fawaswebcastle/gitops-app:v1`
  - **Replicas**: 2
  - **Ingress**: `gitops.fawasam.in` (configured for NGINX class, though Traefik is active).

### Namespace: `cert-manager`
- **Controllers**: `cert-manager`, `cert-manager-cainjector`, `cert-manager-webhook`.
- **Status**: Ready and issuing certificates.

## 5. Recent Fixes & Modifications
- **ArgoCD Redirect Loop**: Corrected the Ingress to use only the `websecure` entrypoint and fixed the `argocd-server` deployment args to prevent 307 loops when behind Cloudflare.
- **ApplicationSet CRDs**: Manually applied missing ApplicationSet CRDs to resolve controller crashes.
- **Ingress Configuration**: Streamlined the `argocd-server-ingress` to ensure stable SSL handshakes.

---
**Note**: To access the cluster from a local machine using `kubectl`, use the K3s config located at `/etc/rancher/k3s/k3s.yaml` on the server (requires sudo).
