module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("OrdemServicos", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        descricao: { type: Sequelize.STRING, allowNull: false },
        dataAbertura: { type: Sequelize.DATE, allowNull: false },
        dataFechamento: { type: Sequelize.DATE, allowNull: true },
        ID_Veiculo: {
          type: Sequelize.INTEGER,
          references: { model: "Veiculos", key: "id" },
          onDelete: "CASCADE"
        },
        ID_Cliente: {
          type: Sequelize.INTEGER,
          references: { model: "Clientes", key: "id" },
          onDelete: "CASCADE"
        },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("OrdemServicos");
    }
  };
  