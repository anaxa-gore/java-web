pipeline {
    agent any
    stages {
        stage('Build (SQL, Server, Client)') {
            steps {
                input 'Go ?'

                // Build de la partie serveur
                dir('server') {
                    bat 'dir .'

                    echo '=============================== stop'
                }
            }
        }
        stage('Tests (Server, Client)') {
            steps {
                echo 'Tests'
            }
        }
        stage('Deploy - Dev') {
            steps {
                echo 'Deploy-dev'
                //gulp 'web/gulpfile.js'
            }
        }
        stage('Deploy - Test') {
            steps {
                //gulp 'web/gulpfile.js'
                echo 'Deploy-Tests'
            }
        }
    }
}