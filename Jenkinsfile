pipeline {
  agent any
  stages {
    stage('server') {
      steps {
        sh '''ls
cd servidor'''
        nodejs('14') {
          sh 'node'
        }

      }
    }

  }
}