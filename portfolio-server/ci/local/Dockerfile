# 로컬 개발 단계
FROM node:18-alpine as local
WORKDIR /usr/src/app
ENV NODE_ENV=development
COPY ["package.json", "package-lock.json", "./"]
RUN apk --no-cache --virtual build-dependencies \
    add python3 make g++ \
    && npm ci \
    && apk del build-dependencies
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]

