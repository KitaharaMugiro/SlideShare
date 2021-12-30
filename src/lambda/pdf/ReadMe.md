# 所感
Front -> Hasura -> Lambda(ECS) -> Hasuraという繋ぎなので、デバッグがかなりしんどい。

# デプロイ
```
cd src/lambda/pdf

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com

docker build -t pdf-to-png .

docker tag pdf-to-png:latest 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com/pdf-to-png:latest

docker push 904678698219.dkr.ecr.ap-northeast-1.amazonaws.com/pdf-to-png:latest
```

コンソールで新しいイメージをデプロイを実施しないといけない

# ローカルテスト

```
docker build -t pdf-to-png .
docker run -p 9000:8080 pdf-to-png
```

URL: http://localhost:9000/2015-03-31/functions/function/invocations