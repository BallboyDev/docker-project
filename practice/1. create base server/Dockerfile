# Dockerfile에 넣을 내용은
# 1. 어떤 OS를 설치 할 건지
# 2. 어떤 프로그램을 설치 할 건지
# 3. 어떤 터미널 명령어를 실행 할 건지
# 4. 내 컴퓨터에 있던 파일을 어디에 집어 넣을 것인지

# Node.js 서버 실행
# OS 설치 -> node.js 설치 -> npm install express -> server.js 생성 -> node server.js

# 베이스 이미지 설정
FROM node:22-slim

# 라이브러리 설치
WORKDIR /app

# 단순 설치
# RUN npm install express

# package.json 기반 설치
COPY . .
RUN ["npm", "install"]
# RUN npm install

EXPOSE 8080

# docker의 마지막 터미널 명령어는 RUN 말고 CMD
CMD ["node", "server.js"]
# ENTRYPOINT ["node", "server.js"]

# 이미지 생성
# docker build -t nodeserver:1.0.0

# 컨테이너 실행
# docker run -p 8080:8080 nodeserver:1.0.0