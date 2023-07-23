pipeline {
    agent any
    stages {
        stage("STAGING Deploy") {
            when {
                branch 'staging'
            }
            steps {
                sh "sh scripts/pipeline/deploy_staging.sh"
            }
        }
        stage("PRODUCTION Deploy") {
            when {
                branch 'main'
            }
            steps {
                sh "sh scripts/pipeline/deploy_production.sh"
            }
        }
    }
}
