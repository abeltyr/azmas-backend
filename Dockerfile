FROM node:14.17.3

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 80

CMD ["node", "." ]