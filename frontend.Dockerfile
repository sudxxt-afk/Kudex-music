# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY frontend/package*.json ./
RUN npm install

# Копируем исходники и собираем проект
COPY frontend/ ./
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Удаляем дефолтную страницу nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный проект из билдера
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
