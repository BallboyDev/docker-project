# Dockerfile 작성법

[Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

## Docker / Node.js 좋은 작성법
### 캐싱
- 빌드 할 때마다 변동 사항이 많이 생기는 부분들을 아래쪽에 작성하기
    - 도커 파일을 빌드하며 명령어를 실행할때 도커는 진행 중인 작업을 캐싱해 놓고 추후 동일한 작업을 수행할 때 재사용을 합니다.
    하지만 실행중 기존(캐싱)과 다른 내용이 나오면 그 이후 부터는 캐싱된걸 사용하지 못하고 작업을 처리하기에 변경된 작업을 가능한 마지막에 두는 것이 빌드 성능을 높이는데 도움을 줄 수 있습니다

### npm ci
`npm install`과 `npm ci`는 모두 의존성 목록을 설치하지만 두 명령의 차이점은 쓰기 권한의 존재라고 할 수 있다.
`npm install`은 package.json을 읽어 의존성 목록을 만들고 package-lock.json을 통해 설치할 의존성을 버전을 설치하지만 `npm ci`는 package-lock.json을 기반으로 의존성을 설치하며 package.json은 버전 매칭 용도로만 사용한다.
즉 `npm install`은 설치 과정에서 개발 당시의 버전과 달라질수 있지만 `npm ci`는 완전히 동일한 버전을 설치하기에 버전 관리 이슈에서 자유로울수 있다.

### ENV
환경 변수를 사용한다.
환경 변수에 따른 개발과 배포 버전의 로그 출력이나 런타임 성능들을 개선할 수 있기 때문이다.

### Root 권한 사용하지 않기
Docker는 기본적으로 컨테이너 내 명령을 루트 권한으로 실행한다. 이는 최소 권한 원칙에 위배된다.
가능하다면 권한이 제한된 node 사용자를 사용하는 것이 좋다.

~~~Dockerfile
FROM ...

USER node
CMD ...
~~~