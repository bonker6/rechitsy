# Этап 1: Установка зависимостей
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Этап 2: Сборка приложения
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Этап 3: Финальный минимальный образ для запуска
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

# Запуск через сгенерированный сервером файл
CMD ["node", "server.js"]
