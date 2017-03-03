pipeline {
    agent any
    stages {
        stage('Build (SQL, Server, Client)') {
            steps {


            }
        }
        stage('Tests (Server, Client)') {
            steps {

            }
        }
        stage('Deploy - Dev') {
            steps {
                gulp 'web/gulpfile.js'
            }
        }
        stage('Deploy - Test') {
            steps {
                gulp 'web/gulpfile.js'
            }
        }
    }
}