FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Этап 2: рантайм ----
FROM node:20-alpine
WORKDIR /app

# Копируем только собранный бандл
COPY --from=builder /app/.output ./.output

# Критически важно для доступа из других контейнеров
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]