# 🚀 Production-Ready DevSecOps CI/CD Pipeline

![Architecture](./screenshots/architecture.png)

## 📌 Project Overview

This project demonstrates a **Production-Ready DevSecOps CI/CD Pipeline** built for a Node.js application using modern DevOps and security tools.
The pipeline automates the complete software delivery lifecycle including:

* Continuous Integration
* Security Scanning
* Docker Image Build
* DockerHub Registry Push
* Automated Deployment on AWS EC2
* GitHub Webhook Automation

The objective of this project is to implement **real-world DevSecOps practices** with automated build, scan, and deployment workflows.

---

# 🚀 Architecture

![Pipeline Architecture](./screenshots/architecture.png)

---

# ⚙️ Tech Stack

| Tool                                                                                | Purpose                          |
| ----------------------------------------------------------------------------------- | -------------------------------- |
| [GitHub](https://github.com?utm_source=chatgpt.com)                                 | Source Code Management           |
| [Jenkins](https://www.jenkins.io?utm_source=chatgpt.com)                            | CI/CD Automation                 |
| [Docker](https://www.docker.com?utm_source=chatgpt.com)                             | Containerization                 |
| [SonarQube](https://www.sonarsource.com/products/sonarqube/?utm_source=chatgpt.com) | Static Code Analysis             |
| [Trivy](https://trivy.dev?utm_source=chatgpt.com)                                   | Container Vulnerability Scanning |
| [Docker Hub](https://hub.docker.com?utm_source=chatgpt.com)                         | Docker Image Registry            |
| [Amazon EC2](https://aws.amazon.com/ec2/?utm_source=chatgpt.com)                    | Cloud Deployment                 |
| [Node.js](https://nodejs.org?utm_source=chatgpt.com)                                | Backend Application Runtime      |
| [Linux](https://ubuntu.com/server?utm_source=chatgpt.com)                           | Server Environment               |

---

# 🔥 CI/CD Pipeline Workflow

```text
Developer Pushes Code
        ↓
GitHub Webhook Trigger
        ↓
Jenkins Pipeline Starts
        ↓
Install Dependencies
        ↓
SonarQube Static Code Analysis
        ↓
Docker Image Build
        ↓
Trivy Vulnerability Scan
        ↓
Push Image to DockerHub
        ↓
Automated Deployment on AWS EC2
        ↓
Live Node.js Application
```

---

# 🔐 Security Features

✅ SonarQube Static Code Analysis
✅ Trivy Container Vulnerability Scanning
✅ Dockerized Deployment
✅ Automated CI/CD Workflow
✅ GitHub Webhook Automation
✅ Cloud Deployment on AWS EC2

---

# 📸 Project Screenshots

## 🔹 Jenkins Pipeline Success

![Jenkins Pipeline](./screenshots/jenkins-pipeline.png)

---

## 🔹 SonarQube Dashboard

![SonarQube](./screenshots/sonarqube-dashboard.png)

---

## 🔹 Trivy Vulnerability Scan

![Trivy Scan](./screenshots/trivy-scan.png)

---

## 🔹 DockerHub Repository

![DockerHub](./screenshots/dockerhub-image.png)

---

## 🔹 Live Application Deployment

![Live App](./screenshots/live-app.png)

---

# 🚀 Jenkins Pipeline Stages

```groovy
Clone Code
↓
Install Dependencies
↓
SonarQube Scan
↓
Docker Build
↓
Trivy Security Scan
↓
Push To DockerHub
↓
Deploy Container
```

---

# 📂 Project Structure

```text
devsecops-nodejs-app/
│
├── screenshots/
├── Jenkinsfile
├── Dockerfile
├── package.json
├── app.js
└── README.md
```

---

# 🚀 How to Run Locally

## Clone Repository

```bash
git clone https://github.com/Kartik-IN/devsecops-nodejs-app.git
cd devsecops-nodejs-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Application

```bash
npm start
```

---

## Build Docker Image

```bash
docker build -t nodeapp .
```

---

## Run Docker Container

```bash
docker run -d -p 3000:3000 --name nodeapp-container nodeapp
```

---

# ☁️ AWS Deployment

The application is deployed on an AWS EC2 instance using Docker containers and automated Jenkins deployment pipelines.

---

# 🔥 Key Learning Outcomes

* CI/CD Pipeline Automation
* DevSecOps Security Integration
* Docker Containerization
* AWS Cloud Deployment
* Jenkins Pipeline Development
* GitHub Webhook Automation
* Vulnerability Scanning
* Linux Server Management
* Production Deployment Workflow

---

# 📈 Future Improvements

* Kubernetes Deployment
* Nginx Reverse Proxy
* HTTPS/SSL Integration
* Infrastructure as Code using Terraform
* Monitoring with Prometheus & Grafana

---

# 👨‍💻 Author

## Kartik Kale

* DevOps & Cloud Enthusiast
* Passionate about Automation, CI/CD, and Cloud Infrastructure

---

# ⭐ If you found this project useful, give it a star on GitHub!
