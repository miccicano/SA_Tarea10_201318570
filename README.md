# Express Redis Docker app

Arrancamos el comando `docker-compose up`.

## Hello World
    http://localhost:3000


## Storing Data
    http://localhost:3000/store/my-key\?some\=value\&some-other\=other-value


## Fetching Data
    http://localhost:3000/my-key


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