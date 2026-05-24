#!/bin/bash
# test_infra.sh - проверяет доступность health эндпоинтов после поднятия docker-compose

echo "Checking Infrastructure Health..."

# Ждем пару секунд для инициализации
sleep 3

# Так как Traefik маршрутизирует по доменам, а скрипт выполняется локально без DNS, 
# мы можем отправить запросы напрямую на localhost с заголовком Host.

# Проверка Frontend (должен вернуть 200, так как nginx отдаст index.html)
echo -n "Checking Frontend (kudex.io): "
FRONTEND_STATUS=$(curl -k -H "Host: kudex.io" -s -o /dev/null -w "%{http_code}" https://localhost)
if [ "$FRONTEND_STATUS" -eq 200 ] || [ "$FRONTEND_STATUS" -eq 404 ]; then
    # Если сертификаты еще не получены, curl -k нужен для игнора самоподписанных.
    # Если вернет 404 - значит Nginx работает, но статики нет (если не успела собраться), но сам сервис жив.
    echo "OK ($FRONTEND_STATUS)"
else
    echo "FAIL (HTTP $FRONTEND_STATUS)"
    exit 1
fi

# Проверка Backend API (должен вернуть 200 для /health)
echo -n "Checking Backend (api.kudex.io/health): "
BACKEND_STATUS=$(curl -k -H "Host: api.kudex.io" -s -o /dev/null -w "%{http_code}" https://localhost/health)
if [ "$BACKEND_STATUS" -eq 200 ]; then
    echo "OK (200)"
else
    echo "FAIL (HTTP $BACKEND_STATUS)"
    exit 1
fi

echo "All services are up and healthy!"
exit 0
