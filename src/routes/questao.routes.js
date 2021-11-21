import { Router } from "express";
import questaoController from "../controller/questao.controller";

const router = Router();

router.get("/", async (_, res) => {
  const questao = await questaoController.index();
  res.json(questao);
});

router.get("/:id", async (req, res) => {
  const user = await questaoController.show(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const questao = await questaoController.store(req.body);
  res.json(questao);
});

router.put("/:id", async (req, res) => {
  const questao = await questaoController.update(req.body, req.params.id);
  res.json(questao);
});

router.delete("/:id", async (req, res) => {
  const user = await questaoController.destroy(req.params.id);
  res.json(user);
});

export default router;
