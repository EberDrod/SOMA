import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/contracts', (_, res) => {
  const files = fs.readdirSync('./contracts');
  res.json(files);
});

app.post('/deploy', (req, res) => {
  const { name, code } = req.body;
  fs.writeFileSync(`./contracts/${name}.soma`, code);
  res.json({ status: 'deployed', name });
});

app.listen(4000, () => {
  console.log('🧠 StellarX backend corriendo en http://localhost:4000');
});
