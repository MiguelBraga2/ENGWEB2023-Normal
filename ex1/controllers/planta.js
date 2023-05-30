var Planta = require('../models/planta')

module.exports.listPlantas = (filter, projection) => {
    return Planta
            .find(filter, projection)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listFreguesias = () => {
    return Planta
            .distinct('Freguesia')
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listEspecies = () => {
    return Planta
            .distinct('Espécie')
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = (planta) => {
    return Planta
            .create(planta)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = (id) => {
    return Planta
            .deleteOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}