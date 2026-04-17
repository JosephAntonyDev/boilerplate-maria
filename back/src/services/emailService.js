const nodemailer = require('nodemailer');

// Simulated email transport (logs to console instead of sending)
const transporter = nodemailer.createTransport({
  jsonTransport: true,
});

async function sendContractEmail(contrato) {
  const mailOptions = {
    from: process.env.SMTP_USER || 'noreply@maria-saas.com',
    to: contrato.email,
    subject: `Contrato - ${contrato.nombre} ${contrato.apellidos}`,
    text: `Estimado/a ${contrato.nombre},\n\nAdjuntamos su contrato generado.\n\nArchivo: ${contrato.contrato}\n\nSaludos,\nEquipo MarIA`,
  };

  // TODO: In production, use real SMTP transport
  console.log('[EMAIL SIMULADO] Enviando email a:', contrato.email);
  console.log('[EMAIL SIMULADO] Asunto:', mailOptions.subject);
  console.log('[EMAIL SIMULADO] Contenido:', mailOptions.text);

  return { message: 'Email simulado enviado', recipient: contrato.email };
}

module.exports = { sendContractEmail };
