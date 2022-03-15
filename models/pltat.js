module.exports =function(sequelize, Sequelize){
  const Plat = sequelize.define('plts', {
  id: {type: Sequelize.INTEGER, autoIncriment: true, primarykey: true,},
  title: {type: Sequelize.STRING,},
  author: {type: Sequelize.STRING,},
  resume: {type: Sequelize.STRING,},
  })
  return Plat
}