pipeline {
    agent any

    // Les paramètres sont accessibles ensuite n'importe où dans params.$NOM_VARIABLE
    parameters {
        choice(
                choices: 'dev\ntest\nprod\n',
                description: 'Platform to build...',
                name: 'PLATFORM_TO_BUILD' // params.PLATFORM_TO_BUILD
        )
    }

    stages {
        stage('Build (SQL, Server, Client)') {
            steps {
                echo('mon choix : ' + params.PLATFORM_TO_BUILD)

                // echo "env:${params.PLATFORM_TO_BUILD}"
                // build serveur/client
                bat "mvn test -P${params.PLATFORM_TO_BUILD}"
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