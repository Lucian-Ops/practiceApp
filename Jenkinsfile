pipeline {
    environment { 
        registry = "luciancimpeanu/practiceapp" 
        registryCredential = 'lucian_docker' 
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
                script { 
                    shortCommit = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                    dockerImage = docker.build registry + ":$shortCommit"
                    dockerImageLatest = docker.build registry + ":$latest"
                }
            }
        }
        stage('Push') {
           steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                }
                script{
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImageLatest.push() 
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    docker.withRegistry( '', registryCredential ) { 
                            dockerImageLatest.pull()
                    }
                }
                sh "docker image run -d $dockerImageLatest"
            }
        }
}