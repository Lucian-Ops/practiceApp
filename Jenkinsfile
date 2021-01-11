pipeline {
    environment { 
        registry = "luciancimpeanu/practiceapp" 
        registryCredential = 'lucian_docker' 
        dockerImage = '' 
    }

    agent any

    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script { 
                    shortCommit = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                    dockerImage = docker.build registry + ":$shortCommit"
                    dockerImageLatest = docker.build registry + ":latest"
                }
            }
        }
        stage('Push') {
           steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                    sh "docker image rm -f $dockerImage"
                }
                script{
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImageLatest.push() 
                    }
                    sh "docker image rm -f $dockerImageLatest"
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
}