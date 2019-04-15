# :bamboo: DGSW-BAMBOO :bamboo:

:bamboo: 대소고 대나무 숲 시즌 2 :bamboo:

## About

대나무 숲은 이름은 삼국유사에 있는 당나귀 귀 임금님의 비밀을

모자 장수가 털어놓는 장소인 대나무 숲 이야기에서 따온 것으로

특정 분야 종사자들의 한풀이를 위해 만들어진 트위터, 페이스북, 텀블러 등 SNS의 공동 계정입니다.

일반적인 운영 방식은 페이스북 페이지 메시지로 제보를 받아 관리자가 올리는 형식입니다.

익명성이 보장되어야 하지만 그렇지 않아 망하는 경우를 종종 보았기에

웹 서비스의 형태로 만들어 익명성을 완벽히 보장해주고,

페이스북 로그인을 이용한 실명 제보 또한 가능하게 만들어보았습니다.

## Stack

자바스크립트 밖에 할 줄 모르기에 모든 것은 자바스크립트입니다.

### Frontend

- react
- react-router
- MobX
- Sass
- styled-components

### Server

- Node.js
- Express
- MongoDB (mongoose)

#### AWS

- EC2
- S3
- CloudFront
- Route53
- ELB

## 프로젝트 빌드

### 클론

```
git clone https://github.com/seojeenyeok/DGSW-BAMBOO.git
```

### 의존성 설치

```
cd backend
yarn
cd frontend
yarn
```

### config 설정

```json
backend/src/config/awscofig.json
  {
    "accessKeyId": "aws iam access key id",
    "secretAccessKey": "aws iam secret access key",
    "region": "ap-northeast-2"
  }
backend/src/config/serverconfig.json
  {
      "dbUrl":"mongodb url",
      "PORT": "USERPORT",
      "FB":"facebook page access token",
      "secret":"jwt secret key",
      "USER":"mongodb user",
      "PASS":"mongodb password",
      "AUTH":"mongodb database name",
      "PUSH":"pushbullet access key"
  }
frontend/src/config/config.json
  {
    "SERVER": "SERVER URL",
    "APP": "facebook app id"
  }
```

### 서버 시작

```
cd backend
yarn start:dev
```

### 프론트엔드 시작

```
cd frontend
yarn start
```

### TMI

CSS는 참 어렵습니다 flex 레이아웃을 배워서 적용해봤는데 나름 재미있네요

앞으로 관심 가는 기술이 생길 때마다 대숲에 적용시킬 예정입니다

많이들 써주세요 안 쓰면 좀 슬프더라구요 열심히 만들었는데..

아무튼 감사합니다
