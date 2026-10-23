# СТАДИЯ 1: Установка зависимостей ---
FROM node:20-alpine AS deps
# Устанавливаем libc6-compat, так как он часто нужен для корректной работы нативных модулей Node в Alpine Linux
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем только файлы зависимостей для эффективного кэширования слоев Docker
COPY package.json package-lock.json ./
# Устанавливаем ВСЕ зависимости (включая devDependencies, нужные для сборки)
RUN npm ci

# СТАДИЯ 2: Сборка приложения ---
FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

# Копируем node_modules из первой стадии и весь исходный код
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Собираем Next.js проект. Флаг --no-lint ускоряет CI/CD пайплайн
RUN npx next build --no-lint

# --- СТАДИЯ 3: Финальный легковесный образ (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
PORT=3000
HOST=0.0.0.0

# 1. БЕЗОПАСНОСТЬ: Создаем системную группу и пользователя, чтобы не запускаться из-под root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 2. Копируем публичные статичные файлы
COPY --from=builder /app/public ./public

# 3. Настраиваем права доступа к папке кэша Next.js для нашего non-root пользователя
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 4. Копируем результат standalone-сборки с автоматическим назначением прав новому пользователю
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключаемся на безопасного пользователя
USER nextjs

EXPOSE 3000

# Запускаем сервер оптимизированной сборки
CMD ["node", "server.js"]
