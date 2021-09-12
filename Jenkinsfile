pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs('node.js') {
          sh '''npm install
knex migrate:latest
npm run devStart'''
        }

      }
    }

  }
}