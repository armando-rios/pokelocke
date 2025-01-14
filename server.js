const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'data', 'lives.json');

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  res.render('index', { players: data.players });
});

// Actualizar vidas
app.post('/update', (req, res) => {
  const { player, change } = req.body;
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

  // Buscar al jugador y actualizar sus vidas
  const playerData = data.players.find(p => p.name === player);
  if (playerData) {
    playerData.lives += parseInt(change, 10);
  }

  // Guardar los cambios en el archivo
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

