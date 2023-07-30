const express = require('express');

const routes = express.Router();

const LivreService = require('./../services/livre.service');

routes.get('/', LivreService.getAllLivre);

routes.get('/:id', LivreService.getLivreByID);
routes.get('/auteur/:id', LivreService.getLivreByAuteur);
routes.post('/:auteurID', LivreService.createLivre);
routes.delete('/:id', LivreService.deleteLivre);
routes.put('/:id', LivreService.updateLivre);
routes.patch('/:id', LivreService.updateOneParam);

module.exports = routes;