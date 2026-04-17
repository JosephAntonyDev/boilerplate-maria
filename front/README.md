# MarIA SaaS - Frontend

Aplicación React + Vite para gestión de hospitality.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev` — servidor desarrollo (puerto 5173)
- `npm run build` — build producción
- `npm run lint` — linting con Biome
- `npm run format` — formateo con Biome
- `npm test` — tests con Jest

## Vistas

- `/dashboard` — estadísticas resumen
- `/reservas` — tabla de reservas
- `/tickets` — tabla de tickets
- `/contratos` — gestión de contratos (funcional)

## Bugs conocidos (para el candidato)

1. Modal no cierra tras submit exitoso — `ContratoModal.jsx` línea con `onClose()`
2. Tabla no responsive en móvil — falta `overflow-x-auto` en `Contratos.jsx`
3. Validación inline no funciona — lógica invertida en `handleSubmit` en `ContratoModal.jsx`
