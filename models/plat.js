module.exports =function(sequelize, Sequelize){
  const Plat = sequelize.define('plats', {
  id: {type: sequelize.INTEGER, autoIncriment: true, primarykey: true,},
  title: {type: Sequelize.STRING,},
  author: {type: Sequelize.STRING,},
  resume: {type: Sequelize.STRING,},
  })
  return Plat
}