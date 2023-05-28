FROM node:20

COPY ./package.json     /app/package.json
COPY ./scripts          /app/scripts
COPY ./public           /app/public
COPY ./src              /app/src

WORKDIR /app

RUN npm install

CMD ["sh", "/app/scripts/entrypoint.sh"]
