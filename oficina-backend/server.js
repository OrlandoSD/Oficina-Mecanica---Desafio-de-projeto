const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const clienteRoutes = require("./routes/clienteRoutes"); // Importa as rotas de cliente
const ordemServicoRoutes = require("./routes/ordemServicoRoutes"); // Importa as rotas de Ordem de Serviço

const app = express(); // Definindo o app do express

app.use(cors());
app.use(bodyParser.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("API da Oficina Mecânica está funcionando!");
});

// Rotas para Clientes
app.use("/api", clienteRoutes); // Integração das rotas de clientes

// Rotas para Ordem de Serviço
app.use("/api", ordemServicoRoutes); // Integração das rotas de Ordem de Serviço

// Escutando na porta 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

