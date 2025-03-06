const express = require("express");
const { OrdemServico } = require("../models");
const router = express.Router();

// Listar todas as ordens de serviço
router.get("/ordens-servico", async (req, res) => {
  const ordensServico = await OrdemServico.findAll();
  res.json(ordensServico);
});

// Criar uma nova ordem de serviço
router.post("/ordens-servico", async (req, res) => {
  const ordemServico = await OrdemServico.create(req.body);
  res.json(ordemServico);
});

// Atualizar uma ordem de serviço
router.put("/ordens-servico/:id", async (req, res) => {
  await OrdemServico.update(req.body, { where: { id: req.params.id } });
  res.json({ success: "Ordem de Serviço atualizada" });
});

// Excluir uma ordem de serviço
router.delete("/ordens-servico/:id", async (req, res) => {
  await OrdemServico.destroy({ where: { id: req.params.id } });
  res.json({ success: "Ordem de Serviço excluída" });
});

module.exports = router;
