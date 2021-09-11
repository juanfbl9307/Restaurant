pipeline {
  agent any
  stages {
    stage('run node') {
      steps {
        sh 'npm install'
        sh 'knex migrate:latest'
        sh 'npm run devStart'
      }
    }

  }
}