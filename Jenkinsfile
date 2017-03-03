pipeline {
    agent any
    stages {
        stage('Build (SQL, Server, Client)') {
            parameters {
                choice(
                        choices: 'dev\ntest\nprod\n',
                        description: 'La plteforme à builder',
                        name: 'PLATFORM_TO_BUILD'
                )
            }

            steps {
                echo('mon choix : ' + params.PLATFORM_TO_BUILD)

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