# 컨테이너 실행 명령어 옵션

1. 백그라운드에서 실행
    - `docker run -d 이미지명:태그`
    - detached의 약자

2. 이미지 실행시 포트 설정
    - `docker run -p 8081:8080 -d 이미지명:태그명`
    - 내 컴퓨터 포트:컨테이너 포트

3. 생선된 컨테이너 리스트
    - `docker ps`
        - 실행중인 컨테이너 리스트
    - `docker ps -a`
        - 생성 되어 있는 모든 컨테이너 (실행, 종료 포함)

4. 컨테이너 컴퓨터 터미널의 로그 출력
    - `docker logs [컨테이너 ID or 이름]`

5. 컨테이너 터미널 접속
    - `docker exec -it [컨테이너 ID or 이름] /bin/bash`

6. 컨테이너 종료(중지)
    - `docker stop [컨테이너 ID or 이름]`

7. 컨테이너 삭제
    - `docker rm [컨테이너 ID or 이름]`
    - `docker rm -f [컨테이너 ID or 이름]`
        - 실행중인 컨테이너 강제 삭제