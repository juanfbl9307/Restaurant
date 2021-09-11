pipeline {
  agent any
  stages {
    stage('run node') {
      steps {
        sh '''ls
cd servidor'''
        sh 'docker-compose up'
      }
    }

  }
}