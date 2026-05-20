# MarIA SaaS - Prueba Técnica Fullstack

Sistema SaaS de hospitality con gestión de contratos, reservas y tickets.

## Despliegues (Live Demo)
Para facilitar la revisión, ambos proyectos fueron desplegados:
- **Frontend (App):** [https://maria-saas.vercel.app/](https://maria-saas.vercel.app/)
- **Backend (API):** [https://maria-saas-api.onrender.com/](https://maria-saas-api.onrender.com/)

---

## Estructura

```
boilerplate/
├── .husky/          # Configuración de husky para conventional commits
├── front/          # Vite + React + Tailwind
├── back/           # Node.js + Express + SQLite
├── node_modules/   # Dependencias de Node.js
├── PROMPTS.md      # Lista para prompts usados
├── README.md       # Documentación general
├── package.json    # Configuración de Node.js
├── package-lock.json # Lockfile de dependencias
├── .gitignore      # Archivos ignorados por git
└── .env.example    # Ejemplo de variables de entorno
```

## Inicio Rápido

### Backend

```bash
cd back
npm install
cp .env.example .env
# Editar .env: descomentar DB_PATH=./database.sqlite
npm run dev
# Corre en http://localhost:3000
```

### Frontend

```bash
cd front
npm install
cp .env.example .env
npm run dev
# Corre en http://localhost:5173
```

## Variables de entorno

Ver `.env.example` en la raíz y en cada proyecto.

## Envío de Email

El sistema **simula** el envío de email — no se conecta a ningún servidor SMTP real. Cuando se crea o reenvía un contrato, el mensaje se imprime en la consola del backend (`console.log`).

No es necesario configurar credenciales de correo. Para la prueba es suficiente con que el frontend muestre un `alert` o una notificación visual al usuario confirmando que el email fue enviado.

## Tests

```bash
# Backend
cd back && npm test

# Frontend
cd front && npm test
```

---

## Tarea para el Candidato

Debes identificar y corregir los siguientes bugs:

### Backend (`back/`)

| # | Bug | Archivo | Pista |
|---|-----|---------|-------|
| 1 | `POST /contratos` retorna 404 | `src/routes/contratos.js` | Ruta no registrada |
| 2 | `GET /contratos/:id` duplica datos | `src/controllers/contratosController.js` | Query innecesaria |
| 3 | `DB_PATH` undefined en conexión | `.env` | Variable no definida |

### Frontend (`front/`)

| # | Bug | Archivo | Pista |
|---|-----|---------|-------|
| 1 | Modal no cierra tras submit | `src/components/ContratoModal.jsx` | `onClose()` comentado |
| 2 | Tabla no responsive en móvil | `src/pages/Contratos.jsx` | Falta `overflow-x-auto` |
| 3 | Validación inline incorrecta | `src/components/ContratoModal.jsx` | Condición invertida |

## Bonus

### Validaciones del formulario (`src/components/ContratoModal.jsx`)

Mejora el formulario de nuevo contrato con las siguientes validaciones:

1. **Campo teléfono** — solo debe aceptar dígitos (no letras ni símbolos)
2. **Fecha de reserva** — no puede ser anterior al día de hoy
3. **Campos vacíos** — todos los campos son obligatorios; mostrar mensaje de error bajo cada campo si están vacíos al hacer submit

### Filtrado y búsqueda en el backend (`back/src/controllers/contratosController.js`)

Extiende el endpoint `GET /contratos` para aceptar filtros opcionales por query params:

- `GET /contratos?status=Firmado` — filtra por status
- `GET /contratos?nombre=Juan` — filtra por nombre (búsqueda parcial, case-insensitive)
- `GET /contratos?status=Firmado&nombre=Juan&page=1` — combinados con paginación

La paginación debe seguir funcionando correctamente al aplicar filtros.

### Prompt Engineering

Usa IA para completar las siguientes tareas y documenta cada prompt en `PROMPTS.md` siguiendo la estructura del archivo.

1. **Datos de prueba** — genera 10 registros realistas para la tabla de contratos
2. **Email profesional** — redacta el cuerpo del email que simula `emailService.js` e intégralo en el código

Para cada prompt documenta: contexto dado, prompt exacto, razonamiento de la estructura y refinamiento si hubo segunda iteración.
