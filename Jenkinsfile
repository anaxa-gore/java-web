pipeline {
    agent any

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
                // On run les tests
                sh "mvn test -P${params.PLATFORM_TO_BUILD}"


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