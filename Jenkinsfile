pipeline {
    agent any

    stages {
        stage('Checkout')
        {
            steps{
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker image build -t practiceapp:latest .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d practiceapp:latest'
            }
        }
    }
}