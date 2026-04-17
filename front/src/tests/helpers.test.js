import { formatDate, validateEmail, validatePhone } from '../utils/helpers.js';

describe('validateEmail', () => {
  test('valid email returns true', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(validateEmail('not-an-email')).toBe(false);
    expect(validateEmail('missing@domain')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});

describe('formatDate', () => {
  test('formats ISO date to es-ES locale', () => {
    const result = formatDate('2024-06-15');
    expect(result).toMatch(/15\/06\/2024|15-06-2024/);
  });

  test('returns dash for empty/null date', () => {
    expect(formatDate('')).toBe('-');
    expect(formatDate(null)).toBe('-');
  });
});

describe('validatePhone', () => {
  test('valid phone returns true', () => {
    expect(validatePhone('612345678')).toBe(true);
    expect(validatePhone('+34 612 345 678')).toBe(true);
  });

  test('too short phone returns false', () => {
    expect(validatePhone('123')).toBe(false);
  });
});
