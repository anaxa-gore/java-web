pipeline {
    agent any
    stages {
        stage('Build (SQL, Server, Client)') {
            steps {
                choice = input message: 'Platform to build ?', parameters: [choice(choices: "dev\ntest\nprod\n", description: 'Platform to build...', name: 'platform')]

                echo 'mon choix : ' | choice

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