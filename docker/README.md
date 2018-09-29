# docker command line

## List Docker CLI commands

docker

docker container --help

## Display Docker version and info

docker --version

docker version

docker info

## Execute Docker image

docker run hello-world

## List Docker images

docker image ls

## List Docker containers (running, all, all in quiet mode)

docker container ls

docker container ls --all

docker container ls -aq

## 查看正在运行的容器

docker ps

## 运行容器

docker run

- -d:让容器在后台运行。

- -P(大写):将容器内部使用的网络端口映射到我们使用的主机上。

- -p(小写):设置不一样的端口