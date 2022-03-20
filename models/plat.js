const { type } = require("express/lib/response")


module.exports = function (sequelize, Sequelize) {
    const Plat = sequelize.define('plats', {
        id: {type: Sequelize.INTEGER, autoIncriment: true,
             primaryKey: true },
        title: {type: Sequelize.STRING},
        author: {type: Sequelize.STRING},
        resume: {type: Sequelize.STRING},

    })
    return Plat
}