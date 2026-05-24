# Stage 1: Builder
FROM python:3.12-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

# Stage 2: Runtime
FROM python:3.12-slim

WORKDIR /app

# Устанавливаем зависимости
COPY --from=builder /app/wheels /wheels
COPY --from=builder /app/requirements.txt .
RUN pip install --no-cache /wheels/*

# Копируем код проекта
COPY . .

# Открываем порт
EXPOSE 8000

# Запуск FastAPI через Uvicorn (или Gunicorn)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
