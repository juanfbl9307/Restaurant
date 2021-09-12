pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs('node.js') {
          sh '''cd servidor
npm install
knex migrate:latest
npm run devStart'''
        }

      }
    }

  }
}
