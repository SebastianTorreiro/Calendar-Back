const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('day', {
    id:{
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    numberOfMonth:{
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true
    },
    numberOfYear:{
      type: DataTypes.INTEGER,
      // allowNull: false,
      // unique: true
    },
    week:{
        type: DataTypes.INTEGER
    },
    month:{
        type: DataTypes.STRING
    },
    00:{
      type: DataTypes.STRING,
    },
    01:{
      type: DataTypes.STRING,
    },
    02:{
      type: DataTypes.STRING,
    },
    03:{
      type: DataTypes.STRING,
    },
    04:{
      type: DataTypes.STRING,
    },
    05:{
      type: DataTypes.STRING,
    },
    06:{
      type: DataTypes.STRING,
    },
    07:{
      type: DataTypes.STRING,
    },
    08:{
      type: DataTypes.STRING,
    },
    09:{
      type: DataTypes.STRING,
    },
    10:{
      type: DataTypes.STRING,
    },
    11:{
      type: DataTypes.STRING,
    },
    12:{
      type: DataTypes.STRING,
    },
    13:{
      type: DataTypes.STRING,
    },
    14:{
      type: DataTypes.STRING,
    },
    15:{
      type: DataTypes.STRING,
    },
    16:{
      type: DataTypes.STRING,
    },
    17:{
      type: DataTypes.STRING,
    },
    18:{
      type: DataTypes.STRING,
    },
    19:{
      type: DataTypes.STRING,
    },
    20:{
      type: DataTypes.STRING,
    },
    21:{
      type: DataTypes.STRING,
    },
    22:{
      type: DataTypes.STRING,
    },
    23:{
      type: DataTypes.STRING,
    },
  },
  {timestamps: false}
  );
};
