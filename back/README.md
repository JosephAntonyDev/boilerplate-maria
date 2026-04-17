# MarIA SaaS - Backend

API REST con Node.js + Express + SQLite para gestión de contratos.

## Setup

```bash
npm install
cp .env.example .env
# Editar .env con tus valores
npm run dev
```

## Variables de entorno

Ver `.env.example`. **Importante:** definir `DB_PATH` en `.env`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/contratos?page=1` | Lista paginada |
| GET | `/contratos/:id` | Detalle |
| POST | `/contratos` | Crear contrato |
| PUT | `/contratos/:id` | Actualizar |
| DELETE | `/contratos/:id` | Eliminar |
| POST | `/contratos/:id/reenviar` | Reenviar email |
| PATCH | `/contratos/:id/firmar` | Firmar contrato |
| PATCH | `/contratos/:id/cancelar` | Cancelar contrato |

## Envío de Email

El envío de email es **simulado**. No se requiere configurar SMTP. Cuando se crea o reenvía un contrato, el contenido del email se imprime en la consola con `console.log`. En el frontend basta con mostrar un `alert` o notificación visual al usuario.

## Tests

```bash
npm test
```

## Bugs conocidos (para el candidato)

1. `POST /contratos` retorna 404 — ruta no registrada en el router
2. `GET /contratos/:id` — query duplicada innecesaria (n+1)
3. `DB_PATH` no definida en `.env` — la conexión usa fallback pero la variable no está configurada
