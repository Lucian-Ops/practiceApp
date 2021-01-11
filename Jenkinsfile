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
                sh 'cd practiceApp; echo done;'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}