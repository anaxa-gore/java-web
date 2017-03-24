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
                //rocketSend
                //	attachments: [audioUrl: '', authorIcon: '', authorName: '', color: 'green', imageUrl: '', messageLink: '', text: 'Build Succes', thumbUrl: '', title: 'my attachment', titleLink: '', titleLinkDownload: '', videoUrl: ''],
                //	channel: 'general', message: 'My message', rawMessage: true

                // On run les tests
                sh "mvn clean"
                sh "mvn install -P${params.PLATFORM_TO_BUILD} -X"
            }
            post {
                success {
                    //rocketSend attachments: [color: 'green', text: 'Tests OK', title: 'Résultat des tests'], channel: 'ic', message: 'Tests successful'
                    rocketSend channel: 'ic', message: 'Tests OK'
                }
                unstable {
                    //rocketSend attachments: [color: 'red', text: 'Tests KO', title: 'Résultat des tests'], channel: 'ic', message: 'Tests failed'
                    rocketSend channel: 'ic', message: 'Tests KO'
                }
                failure {
                    //rocketSend attachments: [color: 'red', text: 'Tests KO', title: 'Résultat des tests'], channel: 'ic', message: 'Tests failed'
                    rocketSend channel: 'ic', message: 'Tests KO'
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