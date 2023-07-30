const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const AuteurController = require('./controllers/auteur.controller');
const LivreController = require('./controllers/livre.controller');

var corsOptions = {
    origin: "{http://localhost:4200}"
  };
const app = express();
const PORT=8989


app.use(cors(corsOptions));
app.use(bodyParser.json());

var db = require('./models');
const basicAuth = require('./middlewares/basic-auth');

db.sequelize.sync(/*{force: true}*/)
  .then(() => {
    console.log("Base de données bien synchronisée.");
  })
  .catch((err) => {
    console.log("Echec lors de la synchronisation: " + err.message);
  });

app.use('/api/v1/auteurs',[basicAuth], AuteurController);
app.use('/api/v1/livres', [basicAuth], LivreController);

app.listen(PORT, ()=>{console.log(`Serveur lancé sur localhost:${PORT}`)});