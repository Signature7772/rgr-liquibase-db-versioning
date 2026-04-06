# РГР: Система керування версіями баз даних (Liquibase)

Цей проєкт демонструє впровадження підходу **Database-as-Code** для автоматизації міграцій бази даних PostgreSQL за допомогою інструменту **Liquibase**.

## Технологічний стек
- **Database:** PostgreSQL (запущений у Docker-контейнері)
- **Tool:** Liquibase 4.27.0
- **Environment:** Ubuntu (Dev Container) / VS Code
- **Driver:** JDBC PostgreSQL Driver 42.7.2

## Як запустити та протестувати

### 1. Підготовка бази даних
Запустіть контейнер PostgreSQL у PowerShell або терміналі:
```bash
docker run --name rgr-db -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres