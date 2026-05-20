pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        IMAGE_NAME = "nodeapp"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Kartik-IN/devsecops-nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''
                    npx sonarqube-scanner \
                    -Dsonar.projectKey=nodeapp \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://http://44.192.132.251:9000 \
                    -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image $IMAGE_NAME'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop nodeapp-container || true
                docker rm nodeapp-container || true

                docker run -d \
                --name nodeapp-container \
                -p 3000:3000 \
                $IMAGE_NAME
                '''
            }
        }
    }
}
