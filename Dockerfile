# --- СТАДИЯ 1: Сборка ---
FROM node:20-alpine AS builder
WORKDIR /app

# Отключаем телеметрию
ENV NEXT_TELEMETRY_DISABLED 1

# Копируем конфиги и ставим зависимости
COPY package*.json ./
RUN npm install

# Копируем весь код и билдим
COPY . .
RUN npx next build --no-lint

# --- СТАДИЯ 2: Запуск (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Копируем только то, что реально нужно для работы
# ВАЖНО: Мы копируем СОДЕРЖИМОЕ папки standalone в корень /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

# Теперь файл server.js точно находится в /app/server.js
CMD ["node", "server.js"]


