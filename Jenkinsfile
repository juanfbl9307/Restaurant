pipeline {
  agent any
  stages {
    stage('run node') {
      steps {
        sh '''ls
cd servidor
node version'''
        sh 'docker-compose up'
      }
    }

  }
}