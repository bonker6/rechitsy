# 🌐 Rechitsy - Community Portal & Infrastructure Platform

A high-performance web platform built with **Next.js 15 (App Router)** and **TypeScript**, featuring an enterprise-grade production-ready infrastructure ecosystem. 

This repository demonstrates the implementation of modern **DevOps methodologies**, focusing on secure containerization, automated **CI/CD pipelines**, Configuration as Code (**Ansible**), and comprehensive **Observability (Prometheus + Grafana + Loki)**.

---

## 🏗 Infrastructure Architecture & Tech Stack

The core philosophy of this project is to build an independent, reproducible, and highly observable environment mimicking a production data center.

*   **Frontend & Logic:** Next.js (SSR, Server Components), TypeScript, Tailwind CSS.
*   **Containerization:** Docker & Docker Compose (Multi-stage builds, isolated networks, non-root execution security).
*   **Web Server / Edge:** Nginx (Reverse Proxy, CORS handling, rewrite rules).
*   **CI/CD Pipeline:** GitHub Actions (Automated building, remote environment integration).
*   **Configuration Management (IaC):** Ansible (Automated provisioning and continuous deployment).
*   **Observability (SRE):** Prometheus (Metrics gathering), Promtail (Log shipping), Grafana (Dashboard visualization).

---

## 🛠 DevOps & Engineering Highlights

### 1. Optimized & Secure Containerization (`Dockerfile`)
*   **Multi-Stage Build Pipeline:** Separate stages for dependency resolution (`npm ci`), building, and production runtime to keep the final image minimal.
*   **Layer Caching:** Tailored Docker context copying to maximize layer caching and speed up deployment steps.
*   **Non-Root Execution Security:** Implemented custom system user/group (`nextjs:nodejs`) inside Alpine Linux. The application avoids running under `root` privileges to mitigate security vulnerabilities.

### 2. Enterprise-Grade CI/CD & Automation (`.github/workflows/`)
*   **Advanced Caching:** Leverages GitHub Actions cache (`type=gha`) for Docker layers, cutting rebuild times drastically.
*   **Immutability & Tagging:** Every main branch push auto-generates a unique image tag based on the target `git commit SHA` along with the `:latest` tag.
*   **Ansible Continuous Deployment:** Integrated with a local `self-hosted` runner that securely triggers Ansible playbooks (`deploy.yml`) to orchestrate container lifecycle updates seamlessly.

### 3. Observability & Monitoring Stand (Prometheus / Promtail)
*   **Infrastructure Metrics:** Prometheus scans server health and performance thresholds.
*   **Centralized Logging:** Integrated Promtail to actively parse application runtime data and stream stdout logs into Grafana Loki tables for full-stack deep debugging.

---

## 🚀 Local Deployment & Setup

### Prerequisites
*   Docker & Docker Compose installed
*   Node.js 20+ (for local development)

### 1. Clone the repository
```bash
git clone https://github.com
cd rechitsy
```

### 2. Run Infrastructure locally (including monitoring stand)
```bash
docker-compose up -d --build
```
*Access local web application at `http://localhost:3000`*

---

