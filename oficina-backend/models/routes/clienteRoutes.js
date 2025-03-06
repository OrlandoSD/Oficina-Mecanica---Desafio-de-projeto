const express = require("express");
const { Cliente } = require("../models");
const router = express.Router();

// Listar todos os clientes
router.get("/clientes", async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

// Adicionar um cliente
router.post("/clientes", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

module.exports = router;
