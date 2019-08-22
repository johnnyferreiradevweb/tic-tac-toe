const express = require('express');
const routes = express.Router();

const RankingController = require('./controllers/RankingController');
const LoginController = require('./controllers/LoginController');
const MachineController = require('./controllers/MachineController');

routes.post('/login', LoginController.login);
routes.post('/signup', LoginController.signup);

routes.get('/ranking', RankingController.index);
routes.post('/ranking', RankingController.store);
routes.get('/ranking/:name', RankingController.show);
routes.put('/ranking/:id', RankingController.update);

routes.post('/calculate', RankingController.calculateScore);

routes.post('/playmachine', MachineController.play);


module.exports = routes;