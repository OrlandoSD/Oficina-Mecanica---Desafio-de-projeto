const express = require("express");
const { Cliente } = require("../models");
const router = express.Router();

// Listar todos os clientes
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar clientes", error: error.message });
  }
});

// Adicionar um cliente
router.post("/clientes", async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: "Erro ao adicionar cliente", error: error.message });
  }
});

module.exports = router;
