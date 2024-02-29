const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    search_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released:{
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rating_top:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    playtime:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    platforms:{
      type: DataTypes.JSONB,
      allowNull:false
    },
    tags:{
      type: DataTypes.JSONB,
      allowNull:true
    }
  },{timestamps: false});
};
