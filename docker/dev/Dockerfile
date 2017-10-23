FROM node:8.5.0
MAINTAINER Ossaija Thankgod<codebugsolved@gmail.com>
RUN useradd --user-group --create-home --shell /bin/false app && \
  apt-get update && npm install nodemon --global && npm set save-exact true 
  
ENV HOME=/home/app
ENV NODE_ENV=development
ENV PROCESS_TYPE=web
ENV PORT=3000

COPY ./  $HOME/code/

RUN chown -R app:app $HOME/*
USER app
WORKDIR $HOME/code

RUN npm install dotenv joi koa koa-bodyparser koa-router koa2-cors \
  semver winston mongoose -S
Run npm install standard chai commitizen cz-conventional-changelog \
  husky mocha nyc sinon sinon-chai -D

ENTRYPOINT ["npm", "run", "dev"]