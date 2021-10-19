
```
cd src/lambda
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com
docker build -t pdf-to-png .
docker tag pdf-to-png:latest 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com/pdf-to-png:latest
docker push 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com/pdf-to-png:latest
```