pipeline {
  agent {
    node {
      label 'server'
    }

  }
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