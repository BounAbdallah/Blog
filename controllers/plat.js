const db = require("../models")

const Plat = db.plats

function getAllPlats(req, res){
    Plat.findAll()
       .then(function(data){
           res.send(data)
       })
       .catch(function(err){
           res.status(500).send({message:err.message })
       })
}

module.exports = { getAllPlats}