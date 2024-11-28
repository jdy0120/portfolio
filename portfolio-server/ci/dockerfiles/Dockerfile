FROM node:22-alpine as base

FROM base as local
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

FROM base as production
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --omit=dev --production
COPY . .
CMD ["npm", "run", "start"]
