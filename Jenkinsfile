pipeline {
  agent {
    node {
      label '14'
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