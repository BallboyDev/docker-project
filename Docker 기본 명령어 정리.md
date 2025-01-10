# Docker Command
- Docker 1.13버전 부터 Docker 명령어 그룹화라는 개념이 추가되었다.
- 명령어를 기능별로 그룹화하여 더 직관적이고 일관성 있게 사용할 수 있도록 만든 구조로 Docker CLI를 사용자가 더 쉽게 이해하고 사용할 수 있도록 개선한것 입니다.

## 주요 그룹화
|그룹 이름|설명|예시 명령어|
|:--|:--|:--|
|docker container|컨테이너 관련 작업|`docker container ls`,  `docker container rm`|
|docker image|이미지 관련 작업|`docker image ls`, `docker image rm`|
|docker network|네트워크 관련 작업|`docker network ls`, `docker network create`|
|docker volume|볼륨 관련 작업|`docker volume ls`, `docker volume prune`|
|docker system|시스템 전체 관리 명령어|`docker system df`, `docker system prune`|
|docker compose|Docker Compose 관련 작업|`docker compose up`, `docker compose down`|

## 기본 명령어 정리
### Docker Container 관리 관련
#### 컨테이너 리스트 조회
~~~bash
docker container ls
~~~
- option
    - --all, -a

#### 컨테이너 실행
~~~bash
docker container run [OPTION] [IMAGE-NAME]
~~~
- option
    - --interactive, -i
    - --tty, -t
    - --detach -d
    - --publish, -p
    - --name, -n
    - --env 

#### 대상 컨테이너내 실행중인 프로세스 목록
~~~bash
docker container top [IMAGE-ID]
~~~

#### 대상 컨테이너 로그 출력
~~~bash
docker container logs [IMAGE-ID]
~~~

#### 대상 컨테이너의 상세 정보 출력
~~~bash
docker container inspect [IMAGE-ID]
~~~

#### 대상 컨테이너 삭제
~~~bash
docker container rm [IMAGE-ID]
~~~
- option
    - --force

### Docker Image 관리 관련
#### 이미지 내려 받기
~~~bash
docker image pull [IMAGE-NAME]
~~~

#### 이미지 빌드
~~~bash
dockder image build 
~~~
- option
    - --tag
        - 인자 값은 Dockerfile 및 이미지에 포함시킬 파일이 위치한 경로

#### 로컬 이미지 조회
~~~bash
docker image ls 
docker image ls [IMAGE-NAME]
~~~

#### 이미지의 히스토리 확인하기
~~~bash
docker image history [IMAGE-NAME]
~~~

### Docker System 관리 관련
#### Docker에서 사용된 디스크 용량 확인
~~~bash
docker system df
~~~