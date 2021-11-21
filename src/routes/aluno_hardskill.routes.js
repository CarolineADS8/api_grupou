import { Router } from "express";
import alunoHardskillController from "../controller/aluno_hardskill.controller";

const router = Router();

router.post("/:id", async (req, res) => {
  const questao = await alunoHardskillController.store(req.body, req.params.id);
  res.json(questao);
});

router.delete("/:id", async (req, res) => {
  const user = await alunoHardskillController.destroy(req.body, req.params.id);
  res.json(user);
});

export default router;
