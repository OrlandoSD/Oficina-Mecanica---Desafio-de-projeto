module.exports = (sequelize, DataTypes) => {
    const OrdemServico = sequelize.define("OrdemServico", {
      descricao: { type: DataTypes.STRING, allowNull: false },
      dataAbertura: { type: DataTypes.DATE, allowNull: false },
      dataFechamento: { type: DataTypes.DATE, allowNull: true },
      ID_Veiculo: { type: DataTypes.INTEGER, allowNull: false },
      ID_Cliente: { type: DataTypes.INTEGER, allowNull: false }
    });
  
    OrdemServico.associate = (models) => {
      OrdemServico.belongsTo(models.Veiculo, {
        foreignKey: "ID_Veiculo",
        onDelete: "CASCADE"
      });
      OrdemServico.belongsTo(models.Cliente, {
        foreignKey: "ID_Cliente",
        onDelete: "CASCADE"
      });
    };
  
    return OrdemServico;
  };
  