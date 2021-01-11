pipeline {
    environment { 
        registry = "luciancimpeanu/practiceapp" 
        registryCredential = 'lucian' 
        dockerImage = '' 
    }

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
                shortCommit = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                script { 
                    dockerImage = docker.build registry + ":$shortCommit" 
                }
            }
        }
        stage('Deploy') {
           steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                }
            }
        }
    }
}