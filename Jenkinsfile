pipeline {
    agent any
    stages {
        stage('Build Server') {
            steps {
                bat 'echo "Hello Server"'
            }

            steps {
                bat 'echo "Coucou hombre"'
            }
        }
        stage('Build Web Client') {
            steps {
                bat 'echo "Hello Client"'
            }
        }
    }
}