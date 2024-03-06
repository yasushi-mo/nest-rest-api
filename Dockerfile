FROM node:21-alpine3.18

ENV NODE_VERSION 20.11.1

WORKDIR /api

COPY ["package.json", "package-lock.json*", "./"]

# cf. https://zenn.dev/zawa_kyo/articles/d671e0935ae0c0
RUN npm ci --omit=dev

