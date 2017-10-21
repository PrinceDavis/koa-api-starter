FROM node:8.5.0
MAINTAINER Ossaija Thankgod<codebugsolved@gmail.com>
RUN useradd --user-group --create-home --shell /bin/false app && \
  npm install nodemon --global \
  apt-get update
  
ENV HOME=/home/app

COPY ./  $HOME/code/

RUN chown -R app:app $HOME/*
USER app
WORKDIR $HOME/code
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]