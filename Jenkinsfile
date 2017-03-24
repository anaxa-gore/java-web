pipeline {
    agent any
    tools {
        maven 'm3'
    }

    // Les paramètres sont accessibles ensuite n'importe où dans params.$NOM_VARIABLE
    parameters {
        choice(
                choices: 'dev\ntest\nprod\n',
                description: 'Platform to build...',
                name: 'PLATFORM_TO_BUILD' // utilisable dans =>  params.PLATFORM_TO_BUILD
        )
    }

    stages {
        stage('Tests (Server, Client)') {
            steps {
                // On signale le début des Tests
                rocketSend channel: 'ic', message: 'Début des tests'

                // On run les tests
                sh "mvn clean"
                sh "mvn install -P${params.PLATFORM_TO_BUILD}"
            }
            post {
                success {
                    rocketSend attachments: [[color: 'red', text: 'Tests OK', title: 'Fin']], channel: 'ic', message: 'Fin des tests', rawMessage: true
                }
                unstable {
                    rocketSend attachments: [[color: 'red', text: 'Tests KO', title: 'Erreur']], channel: 'ic', message: 'Fin des tests', rawMessage: true
                }
                failure {
                    rocketSend attachments: [[color: 'red', text: 'Tests KO', title: 'Erreur']], channel: 'ic', message: 'Fin des tests', rawMessage: true
                }
            }
        }
        stage('Build (SQL, Server, Client)') {
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