# Docker hub (push, pull) image

### docker Repository 만들기
#### Docker hub
1. docker hub 사이트 회원가입 / 로그인
2. create repository
    - 회원 이름/레포 이름

#### 외부 서버 구축 hub

### 이미지 업로드
1. 이미지 생성
    - `docker build -t 이미지이름:태그`
2. 이미지 태그 작성
    - `docker tag 이미지이름:태그 레포지토리이름:태그`
3. 이미지 푸쉬
    - `docker push 레포지토리이름:태그`

- docker hub의 이미지 리스트 중 Image ID 가 동일하면 같은 이미지 입니다.
한 이미지에 여러 이름과 태그를 부여 할 수 있습니다.

### 이미지 다운로드
`docker pull 이미지명:태그`

## Repository 관리
- 보통 프로젝트 진행시 Backend, Frontend, DB 등의 이미지를 별도의 repository에 올리는것이 권장됩니다.
- 하나의 레포지토리에 태그명만 변경하여 관리가 가능하지만 권장 되지는 않습니다.
