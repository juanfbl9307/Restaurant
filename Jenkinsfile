pipeline {
  agent {
    node {
      label 'server'
    }

  }
  stages {
    stage('server') {
      steps {
        sh '''ls
cd servidor'''
        sh 'node version'
      }
    }

  }
}