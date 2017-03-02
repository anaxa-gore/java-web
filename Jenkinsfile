pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'echo "Hello World"'
                bat '''
                    echo "Multiline shell steps works too"
                    dir .
                    exit 0
                '''
            }

            post {
                always {
                    bat 'echo "Fin du build"'
                }
                failure {
                    bat 'echo "C\'est un échec"'
                }
            }
        }
    }
}