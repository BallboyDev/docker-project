# Docker container간 통신

### 네트워크 만들기
`docker network create NETWORK_NAME`

### 네트워크 옵션 포함한 컨테이너 생성
`docker run -d -p 80:80 --network test-net1 --name test-nginx nginx:1.0.0`
`docker run -d --network test-net1 --name test-nodeserver nodeserver:1.0.0`

### 컨테이너 정보 확인
`docker inpect CONTAINER_ID`


### bridge 모드 vs host 모드


# Docker volume
### volume 만들기
`docker volume create VOLUMNE_NAME`

`docker volume ls`

`docker volume inspect VOLUMNE_NAME`

`docker volume rm VOLUMNE_NAME`

`docker run -d --name test-mariadb -e MARIADB_ROOT_PASSWORD=1234 -v test-vol1:/var/lib/mysql mariadb:latest`