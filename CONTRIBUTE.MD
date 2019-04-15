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
