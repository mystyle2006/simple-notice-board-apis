#어떤 이미지로부터 새로운 이미지를 생성할지를 지정
FROM node:14.18.1

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

# /app 디렉토리 생성
RUN mkdir -p /app

# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /app

# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /app

# npm install 을 실행
RUN npm install

RUN npm run build

#가상 머신에 오픈할 포트
EXPOSE 3000

#컨테이너에서 실행될 명령을 지정
CMD ["sh", "-c", "npm run start:prod"]
