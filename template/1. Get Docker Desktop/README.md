# Get Docker Desktop
- Docker Desktop은 이미지 구축, 컨테이너 실행 등을 위한 올인원 패키지 입니다.

## Container 실행
- `docker run -d -p 8080:80 docker/welcome-to-docker`
- 해당 컨테이너의 경우 프론트엔드에서 액세스 할 수 있습니다.
    - `http://localhost:8080`

## Container 관리
- 

## docker image
- `git clone https://github.com/docker/welcome-to-docker.git`
- `docker build 0t welcome-to-docker .`
- `docker run -d -p 8088:3000 --name welcome-to-docker welcome-to-docker`

## dockerfile
~~~Dockerfile
# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]
~~~