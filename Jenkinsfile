pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    environment {
        IMAGE_NAME = "nodeapp"
        DOCKERHUB_USER = "kartikin"
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
                    -Dsonar.host.url=http://44.192.132.251:9000 \
                    -Dsonar.token=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh 'trivy image $IMAGE_NAME'
            }
        }

        stage('Push To DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                    docker tag $IMAGE_NAME $DOCKERHUB_USER/$IMAGE_NAME:latest

                    docker push $DOCKERHUB_USER/$IMAGE_NAME:latest
                    '''
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop nodeapp-container || true
                docker rm nodeapp-container || true

                docker pull $DOCKERHUB_USER/$IMAGE_NAME:latest

                docker run -d \
                --name nodeapp-container \
                -p 3000:3000 \
                $DOCKERHUB_USER/$IMAGE_NAME:latest
                '''
            }
        }
    }
}

