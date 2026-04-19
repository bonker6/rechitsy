# Используем 20-ю версию (LTS)
FROM node:20-alpine

WORKDIR /app

# Копируем только файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости с нуля
RUN npm install

# Копируем всё остальное
COPY . .

# Отключаем телеметрию и запускаем билд
ENV NEXT_TELEMETRY_DISABLED 1

RUN npx next build --no-lint


EXPOSE 3000

CMD ["npm", "start"]
