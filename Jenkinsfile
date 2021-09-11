pipeline {
  agent any
  stages {
    stage('server') {
      steps {
        sh '''ls
cd servidor'''
        sh 'node version'
        nodejs('14.17') {
          sh 'npm install'
        }

      }
    }

  }
}