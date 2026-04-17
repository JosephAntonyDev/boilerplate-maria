require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const contratosRouter = require('./routes/contratos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/contratos', contratosRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`MarIA Backend running on port ${PORT}`);
});

module.exports = app;
