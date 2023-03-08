const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('event', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true
      },
    time:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    note:{
        type: DataTypes.STRING,
        allowNull: false
    },
      
},
{timestamps: false}
);
};
