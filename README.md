## Stack
- nodejs
- nestjs
- mysql
- redis
- liquibase
- docker

## Installation
1. 도커 이미지 실행
```bash
$ yarn docker:up
```

2. 서비스 실행
- 실행 후 docker에 모든 자원은 실행되었지만 liquibase를 통해 모든 스키마 및 mocking 데이터가 생성되므로 1분 ~ 2분 정도 더 기다리신 후 확인하실 수 있습니다.
```bash
$ yarn service:up
```

3. 서비스 종료
```bash
$ yarn service:down
```

## Description
- host: localhost
- port: 3000
- docs: /api


