import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// GET: lista los contratos desplegados
app.get('/contracts', (_, res) => {
  const files = fs.readdirSync('./contracts');
  res.json(files);
});

// POST: recibe nombre y código del contrato
app.post('/deploy', (req, res) => {
  const { name, code } = req.body;

  const dir = path.resolve('./contracts');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, `${name}.soma`);
  fs.writeFileSync(filePath, code);

  res.json({ status: 'deployed', name });
});

app.listen(4000, () => {
  console.log('🧠 StellarX backend corriendo en http://localhost:4000');
});