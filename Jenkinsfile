pipeline {
    agent any
    stages {
        stage('Build (SQL, Server, Client)') {
            steps {
                input message: 'Plateforme ?', parameters: [[
                                                                    $class: 'ChoiceParameterDefinition', name: 'Plateforme', choices: 'dev,test,prod', description: 'La plateforme à builder'
                                                            ]]

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