module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    return Cliente;
  };
  