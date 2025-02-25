# Stage 1: 빌드 단계
FROM node:18-alpine AS builder
WORKDIR /app

# 의존성 설치를 위해 package.json 관련 파일 복사
COPY package*.json ./
RUN npm ci

# 전체 소스코드 복사 및 빌드 실행
COPY . .
RUN npm run build:prd

# Stage 2: 런타임 단계
FROM node:18-alpine AS runner
WORKDIR /app

# production 모드 설정
ENV NODE_ENV=production

# 빌드 결과물과 필요한 파일 복사
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# production 의존성만 설치
RUN npm ci --only=production

# 컨테이너 외부로 노출할 포트
EXPOSE 5173

# production 모드로 Next.js 서버 실행 (package.json에 "start": "next start" 스크립트가 정의되어 있어야 함)
CMD ["npm", "run", "start"]