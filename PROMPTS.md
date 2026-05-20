# PROMPTS.md

Documenta los prompts que utilizaste para las siguientes tareas. Sigue la estructura indicada para cada uno.

---

## Prompt 1: Generación de datos de prueba

**Tarea:** Generar 10 registros realistas para la tabla de contratos (nombre, apellidos, teléfono, email, fecha_reserva, status).

### Contexto dado a la IA
Le pedí que los datos fueran para un SaaS de hotelería para que los nombres y correos tuvieran más sentido orgánico. Le di los campos exactos de la tabla, las restricciones del formato de los teléfonos (10 dígitos de México), el tipo de dato de las fechas y el `enum` específico permitido para el campo `status`.

### Prompt
Necesito que me generes 10 registros ficticios pero realistas para una base de datos SQLite de una plataforma SaaS de hoteles.
Los campos que necesito son: `nombre`, `apellidos`, `telefono` (formato mexicano 10 digitos), `email`, `fecha_reserva` (fechas a partir del 19 de mayo del 2026) y `status` (valores permitidos: 'Pendiente de firma', 'Firmado', 'Cancelado').
Entrégame el resultado directamente en formato SQL `INSERT INTO contratos ...` lista para copiarse y pegarse.

### Por qué lo estructuraste así
Fui específico en el formato de salida SQL para no tener que parsear tablas o arrays a código de base de datos manualmente. También liste concretamente los posibles Status para evitar que la IA alucinara estados que el frontend no reconoce.

### Segunda iteración (si aplica)
Con el primero salió.

### Resultado obtenido
```sql
INSERT INTO contratos (nombre, apellidos, telefono, email, fecha_reserva, status) VALUES 
('Carlos', 'Ramírez Soto', '5512349876', 'carlos.ramirez@example.com', '2026-06-15', 'Pendiente de firma'),
('María', 'Fernández Ruiz', '3387654321', 'maria.fernandez@example.com', '2026-05-20', 'Firmado'),
('Jorge', 'López Vega', '8190908765', 'jorge.lopez@example.com', '2026-07-02', 'Cancelado'),
('Ana', 'Torres Mendieta', '5567675432', 'ana.torres@example.com', '2026-05-28', 'Firmado'),
('Luis', 'García Pimentel', '3345456789', 'luis.garcia@example.com', '2026-06-10', 'Pendiente de firma'),
('Diana', 'Cortés Alba', '8123234567', 'diana.cortes@example.com', '2026-07-12', 'Firmado'),
('Roberto', 'Márquez Solís', '5534567890', 'roberto.marquez@example.com', '2026-05-22', 'Cancelado'),
('Elena', 'Vargas Rico', '3321456987', 'elena.vargas@example.com', '2026-06-05', 'Firmado'),
('Arturo', 'Castillo Bueno', '8111223344', 'arturo.castillo@example.com', '2026-07-20', 'Pendiente de firma'),
('Sofía', 'Navarro del Río', '5588776655', 'sofia.navarro@example.com', '2026-08-01', 'Firmado');
```
---

## Prompt 2: Mensaje de email profesional

**Tarea:** Redactar el cuerpo del email que simula el envío del contrato al huésped (el que actualmente hace `console.log` en `emailService.js`).

### Contexto dado a la IA
Le pedí a la IA que asumiera el rol de copywriter para la empresa MarIA SaaS y que el tono fuera formal pero amigable. Le indiqué exactamente qué variables dinámicas de JavaScript (`${}`) debía incluir dentro del texto, basándome en los datos del objeto `contrato` disponible en el backend.

### Prompt
Actúa como un copywriter profesional de una empresa llamada 'MarIA SaaS'. Redacta una plantilla de correo electrónico formal pero amigable, dirigida a un huésped de hotel. Este correo sirve para enviarle su contrato de reservación para que lo revise y firme.
La plantilla debe incluir variables en formato de JavaScript (como ${contrato.nombre}, ${contrato.apellidos} y ${contrato.fecha_reserva}).
Solo entrégame el texto del correo estructurado como un template string (con backticks  \ `) listo para usarse en Node.js.

### Por qué lo estructuraste así
Pues le di un "rol" a la IA para mejorar la calidad de redacción y me adelanté pidiéndole directamente un "template string" (con interpolación de variables). Esto me ahorró tener que agarrar un texto normal de la IA e insertarle manualmente los `${}` en mi código.

### Segunda iteración (si aplica)
Igual a la primera. 

### Resultado obtenido
```javascript
const emailBody = `
Estimado/a ${contrato.nombre} ${contrato.apellidos},

Esperamos que se encuentre muy bien.

En nombre de MarIA SaaS y nuestro hotel asociado, nos alegra confirmar los detalles iniciales de su próxima estadía. Adjunto encontrará su contrato de reservación para la fecha: ${contrato.fecha_reserva}.

Por favor, revise detenidamente la información y, en caso de estar de acuerdo, proceda con la firma electrónica del documento para asegurar su espacio con nosotros.

Si tiene alguna duda con el contrato o su reservación, responder a este correo será suficiente para ponernos en contacto con usted.

Agradecemos su preferencia y esperamos darle la bienvenida pronto.

Atentamente,
El equipo de MarIA SaaS
`; 
```