const Joi = require('joi');

const contratoSchema = Joi.object({
  nombre: Joi.string().min(2).max(100).required(),
  apellidos: Joi.string().min(2).max(100).required(),
  telefono: Joi.string().min(6).max(20).required(),
  email: Joi.string().email().required(),
  fecha_reserva: Joi.string().isoDate().required(),
});

describe('Joi Schema Validation', () => {
  test('valid contrato passes validation', () => {
    const { error } = contratoSchema.validate({
      nombre: 'Juan',
      apellidos: 'Pérez',
      telefono: '612345678',
      email: 'juan@example.com',
      fecha_reserva: '2024-06-15',
    });
    expect(error).toBeUndefined();
  });

  test('invalid email fails validation', () => {
    const { error } = contratoSchema.validate({
      nombre: 'Juan',
      apellidos: 'Pérez',
      telefono: '612345678',
      email: 'not-an-email',
      fecha_reserva: '2024-06-15',
    });
    expect(error).toBeDefined();
    expect(error.details[0].message).toContain('email');
  });

  test('missing required fields fails validation', () => {
    const { error } = contratoSchema.validate({ nombre: 'Juan' });
    expect(error).toBeDefined();
  });
});

describe('Pagination logic', () => {
  test('calculates correct offset', () => {
    const page = 3;
    const limit = 10;
    const offset = (page - 1) * limit;
    expect(offset).toBe(20);
  });

  test('calculates total pages correctly', () => {
    const total = 45;
    const limit = 10;
    const totalPages = Math.ceil(total / limit);
    expect(totalPages).toBe(5);
  });
});
