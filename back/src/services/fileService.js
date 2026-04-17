const fs = require('fs');
const path = require('path');

const contractsDir = path.join(__dirname, '../../contracts');

if (!fs.existsSync(contractsDir)) {
  fs.mkdirSync(contractsDir, { recursive: true });
}

function generateContractFile(contrato) {
  const filename = `contrato_${contrato.id}_${Date.now()}.txt`;
  const filepath = path.join(contractsDir, filename);

  const content = `
CONTRATO DE RESERVA - MarIA SaaS
=================================
ID: ${contrato.id}
Nombre: ${contrato.nombre} ${contrato.apellidos}
Teléfono: ${contrato.telefono}
Email: ${contrato.email}
Fecha Reserva: ${contrato.fecha_reserva}
Status: ${contrato.status}
Generado: ${new Date().toISOString()}

Este es un contrato dummy generado automáticamente.
  `.trim();

  fs.writeFileSync(filepath, content);
  return filename;
}

module.exports = { generateContractFile };
