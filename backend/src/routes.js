const express = require('express');
const routes = express.Router();

const RankingController = require('./controllers/RankingController');

routes.get('/ranking', RankingController.index);
routes.post('/ranking', RankingController.store);
routes.get('/ranking/:name', RankingController.show);
routes.put('/ranking/:id', RankingController.update);


module.exports = routes;