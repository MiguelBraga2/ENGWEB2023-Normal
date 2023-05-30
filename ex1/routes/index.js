var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta.js')

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.listFreguesias()
  .then(freguesias => {
    res.jsonp(freguesias)
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção das freguesias"})
  })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.listEspecies()
  .then(especies => {
    res.jsonp(especies)
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção das especies"})
  })
});

router.get('/plantas/:id', function(req, res, next) {
  var id = req.params.id
  Planta.listPlantas({_id: id}, {})
  .then(plantas => {
    res.jsonp(plantas[0])
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção dos contratos"})
  })
});

router.get('/plantas', function(req, res, next) {
  if (req.query.especie){
    var especie = req.query.especie
    Planta.listPlantas({Espécie: especie}, {})
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das plantas"})
    })
  }
  else if (req.query.implant){
    var implant = req.query.implant
    Planta.listPlantas({Implantação: implant}, {})
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das plantas"})
    })
  }
  else{
    Planta.listPlantas({}, {})
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das plantas"})
    })
  }
  
});

router.post('/plantas', (req, res, next) => {
  Planta.addPlanta(req.body)
  .then(resp => {
      res.jsonp(resp)
  })
  .catch(erro => {
      res.render('error', {error: erro, message: "Erro na criação da planta"})
  })
})

router.delete('/plantas/:id', (req, res, next) => {
  var id = req.params.id 
  Planta.deletePlanta(id)
  .then(resp => {
    res.jsonp(resp)
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na eliminação do registo da planta"})
  })
})

module.exports = router;
