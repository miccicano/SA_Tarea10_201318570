# Express Redis Docker app

Arrancamos el comando `docker-compose up`.

## Hello World
    http://localhost:3000


## Bienvenido
    http://localhost:3000/index


## Para actualizar algun cambio en nuestro docker se deberá de correr los siguientes comandos:

* docker-compose down
* docker-compose down -v
* docker-compose up -d
* docker-compose start

## Para ver todos los conedores DOCKER

* docker images -q
* docker ps -a -q

## Para eliminar todo 
* docker rmi
* docker rm

* docker system prune
* docker system prune -a


## Agregamos pipel para la entrega continua

pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/miccicano/SA_Tarea10_201318570.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }      
  }
}

# video
https://youtu.be/GCNifYskQok