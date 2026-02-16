pipeline {
    agent any

    tools {
        nodejs "node20"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/RajkumarR1206/cicd-secure-app'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonar') {
                    sh '''
                    npm install -g sonarqube-scanner
                    sonar-scanner \
                      -Dsonar.projectKey=cicd-secure-app \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://localhost:9000 \
                      -Dsonar.login=$SONAR_AUTH_TOKEN || true
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t cicd-secure-app:${BUILD_NUMBER} .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image cicd-secure-app:${BUILD_NUMBER} || true'
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                docker stop cicd-app || true
                docker rm cicd-app || true
                docker run -d -p 3000:3000 --name cicd-app cicd-secure-app:${BUILD_NUMBER}
                '''
            }
        }
    }
}
