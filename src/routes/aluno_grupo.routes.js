import { Router } from "express";
import controller from "../controller/aluno_grupo.controller";

const router = Router();

router.post("/:id", async (req, res) => {
  const questao = await controller.store(req.body, req.params.id);
  res.json(questao);
});

router.delete("/:id", async (req, res) => {
  const user = await controller.destroy(req.body, req.params.id);
  res.json(user);
});

export default router;
