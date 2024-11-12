## Develop with containers
- 예시 프로젝트
    - `git clone https://github.com/docker/getting-started-todo-app`
- 프로젝트 개발 환경 Docker 실행
~~~
> cd getting-started-todo-app
> docker compose watch
~~~

- `docker compose watch`
    - compose.yml 파일을 기반으로 여러 컨테이너를 함꼐 실행 및 관리
    - 해당환경에서는 애플리케이션이 변경되면 hotfix를 통하여 환경 적용
    - 파일 업데이트 시 서비스 및 컨테이너 재구성/새로고침을 위한 빌드 컨텍스트 관찰

