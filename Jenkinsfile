pipeline {
    agent any
    stages {
        stage("Env vars") {
            steps {
                echo "Start......"
                sh "printenv"
                echo "End!!!"
            }
        }
        stage("Test") {
            steps {
                echo "Current directory: $PWD"
                echo "Content of the current directory:"
                sh "ls -la"
            }
        }
    }
}
