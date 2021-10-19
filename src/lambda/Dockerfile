FROM public.ecr.aws/lambda/python:3.6
# ベースイメージはPython3.6環境を使いたいのでpublic.ecr.aws/lambda/python:3.6

RUN yum -y install poppler-utils
# poppler-utilsをインストール
# apt-getは使えないので注意

COPY app.py ${LAMBDA_TASK_ROOT}

COPY requirements.txt  .
RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"
# 必要なライブラリのインストール

CMD ["app.lambda_handler"]