# 1. 빌드 단계
FROM node:18-alpine AS BUILDER
LABEL maintainer="Doyeonism"
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. 실행 단계
FROM node:18-alpine AS PRODUCTION
LABEL maintainer="Doyeonism"
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install --production
COPY --from=BUILDER /usr/src/app/dist ./dist
CMD ["npm", "run", "start"]