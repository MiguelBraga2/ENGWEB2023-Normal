var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')

function getPlantasDaEspecie(especie, plantas) {
  var plantasDaEspecie = [];
  for (var i = 0; i < plantas.length; i++) {
    if (plantas[i].Espécie == especie) {
      plantasDaEspecie.push(plantas[i]);
    }
  }
  return plantasDaEspecie;
}

router.get('/especies/:especie', function(req, res, next){
  var data = new Date().toISOString().substring(0,19)
  var especie = req.params.especie
  console.log(especie)
  axios.get(env.apiAccessPoint+"/plantas?especie="+especie)
  .then(response => {
    res.render('paginaEspecie', { list:  response.data, d: data});
  })
  .catch(error => {
    res.render('error', {error: err})
  })
})

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+"/plantas/"+req.params.id)
  .then(response => {
    res.render('paginaPlanta', { registo: response.data, d: data});
  })
  .catch(error => {
    res.render('error', {error: err})
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+"/plantas")
  .then(response => {
    res.render('index', { list:  response.data, d: data});
  })
  .catch(error => {
    res.render('error', {error: err})
  })
});




module.exports = router;
