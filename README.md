# Secure CI/CD Pipeline Project — Jenkins + Tests + Code Quality + Security Scan

## Project Overview

This project demonstrates a **complete end-to-end CI/CD pipeline** built using Jenkins on a cloud VM.
It automatically builds, tests, scans, containerizes, and deploys a sample web application.

The goal of this project is to showcase **real DevOps skills** for interviews and portfolio — including automation, quality checks, and security scanning — while keeping the application simple and easy to understand.

---

# Architecture Flow

```
Developer Push → GitHub Repo → Jenkins Pipeline → Install → Test → Code Scan → 
Docker Build → Vulnerability Scan → Container Deploy → Live App
```

---

# Screenshots - Demo: 

* Jenkins pipeline success view:
<img width="1357" height="670" alt="ci-cd-secure" src="https://github.com/user-attachments/assets/a6a97366-9b74-4cbe-837b-504ffbacef59" />


* Jenkins stage view:
<img width="1361" height="670" alt="stage-jen" src="https://github.com/user-attachments/assets/dcd8456a-953f-419d-980d-24d96c4f86fe" />

* Test pass console output:
<img width="1352" height="626" alt="run-test" src="https://github.com/user-attachments/assets/f7ef5cff-6a52-46d6-9c60-11c32390e9af" />

* SonarQube dashboard:
<img width="1345" height="584" alt="sonarcube" src="https://github.com/user-attachments/assets/efdd814a-8f7b-4727-9d2c-52b49da08e07" />

* Trivy scan output:
<img width="1345" height="619" alt="trivy-scan" src="https://github.com/user-attachments/assets/d47bc883-05c1-4d52-bd0b-84b38f55b6a6" />

* Running app in browser:
<img width="1183" height="499" alt="ci-cd-web" src="https://github.com/user-attachments/assets/f2342913-69da-44fe-88d7-b67bcdef1b31" />

* Docker images list:
<img width="1362" height="329" alt="docker-ci" src="https://github.com/user-attachments/assets/2febdda9-6558-4e23-af54-fc90cdaa8759" />


---

# Tech Stack Used

* Jenkins — CI/CD pipeline automation
* Azure VM — pipeline host server
* Node.js + Express — demo web app
* Jest — unit testing
* SonarQube — static code quality analysis
* Trivy — container vulnerability scanning
* Docker — container build & deployment
* GitHub — source code management

---

# Project Structure

```
cicd-secure-app/
 ├── app.js
 ├── server.js
 ├── tests/
 │    └── app.test.js
 ├── Dockerfile
 ├── package.json
 ├── Jenkinsfile
 └── README.md
```

---

# What This Pipeline Does

## 1. Source Checkout

* Jenkins pulls latest code from GitHub main branch

## 2. Dependency Installation

* Runs `npm install`
* Ensures clean reproducible build environment

## 3. Automated Testing

* Runs Jest unit tests
* Pipeline stops if tests fail

## 4. Code Quality Scan

* SonarQube analyzes:

  * code smells
  * maintainability issues
  * basic metrics

## 5. Docker Image Build

* Builds versioned Docker image using Dockerfile
* Tagged with Jenkins build number

## 6. Vulnerability Scan

* Trivy scans Docker image
* Detects known CVEs in packages and dependencies
* Report stored in Jenkins logs/artifacts

## 7. Automated Deployment

* Old container stopped (if exists)
* New container deployed automatically
* App exposed on port 3000

---

# How to Run App Manually (Without Jenkins)

```bash
npm install
npm test
node server.js
```

Open:

```
http://SERVER_IP:3000
```

---

# Docker Run (Manual)

```bash
docker build -t cicd-secure-app .
docker run -p 3000:3000 cicd-secure-app
```

---

# Key DevOps Concepts Demonstrated

* CI/CD pipeline design
* Pipeline as Code (Jenkinsfile)
* Automated testing in CI
* Static code quality checks
* Container security scanning
* Dockerized deployment
* Cloud VM pipeline hosting
* Reproducible builds


---

# Status

**Pipeline:** Working

**Tests:** Passing

**Security Scan:** Enabled

**Deployment:** Automated

---

# Author

**Rajkumar R**

DevOps / CI-CD Portfolio Project
