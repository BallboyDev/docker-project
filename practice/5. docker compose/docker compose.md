# docker compose

## docker-compose.yml
~~~yml
services:
    CONTAINER_NAME1:
        image: IMAGE_NAME1
        ports:
            - 내컴퓨터포트:컨테이너포트
        environment:
            - 환경변수1=값
            - 환경변수2=값
            - 환경변수3=${외부파일값}
        networks:
            - NETWORK_NAME1
            - NETWORK_NAME2

    CONTAINER_NAME2:
        image: IMAGE_NAME2
        ports:
            - 내컴퓨터포트:컨테이너포트
        environment:
            - 환경변수1=값
            - 환경변수2=값
            - 환경변수3=${외부파일값}
        depends_on:
            - CONTAINER_NAME1
        networks:
            - NETWORK_NAME1

    CONTAINER_NAME3:
        image: IMAGE_NAME3
        ports:
            - 내컴퓨터포트:컨테이너포트
        deploy: 
            mode: replicated
            replicas: 3
        networks:
            - NETWORK_NAME2
        volumes:
            - VOLUME_NAME:path
        restart: always
        build: .
        command: ["arg1", "arg2"]
        develop:
            watch:
                - action: sync
                    path: 내컴퓨터경로
                    target: 컨테이너경로
                    ignore:
                        - 반영안할아이템
                - action: rebuild
                    path: package.json
        

networks:
    NETWORK_NAME1:
    NETWORK_NAME2:

volumes:
    VOLUME_NAME:
        external: true
~~~

## docker compose 기본 명령어

### 띄우고
`docker compose up -d`
### 정지
`docker compose stop`
### 삭제
`docker compose down`

## docker compose
- 네트워크
    - docker compose의 `services:` 하위 항목에 있는 컨테이너들은 자동으로 하나의 네트워크로 묶이게 됩니다. 컨테이너끼리 서로 찾으려면 IP주소 혹은 컨테이너 이름을 기재하면 됩니다.
    - 별도의 네트워크를 선언하고 서비스 별로 네트워크를 지정하면 네트워크를 더 세부적으로 분리할 수 있습니다.

- 컨테이너간 dependency
    - 컨테이너들을 생성할때 실행 순서나 컨테이너간의 종속성을 가지게 되는 경우가 있습니다.
    그럴 경우 `depends_on:` 하위 항목으로 다른 서비스의 이름을 기재하게 되면 기재된 서비스 컨테이너가 먼저 생성 및 실행되고 다음으로 생성됩니다.

- deploy
    - 서비스 베포 전략, 리소스, 복제 등을 설정합니다.

- volume
    - docker compose 환경에서 `volumes:` 설정을 활용하여 컨테이너 별 volume을 관리 할 수 있습니다.

- restart
    - 컨테이너가 이슈로 인해 종료 되었을 경우 자동으로 재 시작 하기 위해서 설정합니다.
    다만 docker 명령어나 컨테이너를 직접 정지시켰을 경우에는 자동 재시작은 작동하지 않습니다.

### 빌드 자동화
- 개발 환경을 컨테이너에 구축하고 프로젝트를 진행하는 경우가 자주 있습니다.
이 경우 `down` -> `image build` -> `up` 과정을 자동화 할 수 있습니다.
- 서비스 내부에 `build: 도커파일경로`를 입력하면 `docker compose up` 할 때마다 해당 경로에 있는 도커파일을 자동으로 docker build 명령을 수행해서 이미지를 생성하고 컨테이너를 띄워줍니다.
- 하지만 자동으로 build를 진행하기 위해서는 `docker compose up --build` 명령어를 사용 해야 합니다.

### graceful shutdown
- 도커엔진이 컨테이너를 종료시키는 과정은 엔진에서 컨테이너에 종료 메시지를 전송하고 메시지를 수신한 컨테이너의 프로그램이 서비스를 종료 시키고 컨테이너를 종료합니다.
- 만약, 프로그램에 서비스를 종료하는 코드가 없다면 약 10초 후 강제로 컨테이너가 종료되게 됩니다.
- 프로그램을 제작할때는 외부에서 종료 관련 코드에 따라 프로그램을 종료하고 리소스를 정리하는 코드를 작성하는게 보안과 서비스 안정성에 큰 도움이 됩니다.

- 종료 메시지
    - SIGTERM
        - Docker 엔진에서 컨테이너를 종료할때 수신하는 메시지 입니다.
        - Terminal 에서 kill 명령어를 입력했을때 수신하는 메시지 입니다.
    - SIGINT
        - 유저가 터미널에서 ctrl + c와 같이 종료할때 수신하는 메시지 입니다.

### watch
- watch 기능은 특정 파일 및 폴더가 변경될 때마다 연결된 컨테이너 경로에 동기/비동기적으로 반영해줍니다.
    - `- action:`
        - sync<+restart> : 동적으로 반영, +restart 는 반영 후 자동 재시작
        - rebuild : 반영 후 재 빌드
    - `path`: 내 컴퓨터의 감지할 폴더의 경로 입니다.
    - `target`: 반영할 컨테이너의 경로 입니다.
    - `ignore`: 변동사항을 적용할 필요가 없는 파일이나 아이템을 작성합니다. .dockerignore로 따로 관리할 수 있습니다.

- `docker compose up --watch`

### command
- compose 파일 내부에 `command` 명령을 사용하면 Dockerfile의 CMD 명령어를 덮어 쓸수 있습니다.
    - CMD와 ENTRYPOINT 명령어 차이점 참고