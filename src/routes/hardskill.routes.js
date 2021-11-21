import { Router } from "express";
import hardskillController from "../controller/hardskill.controller";

const router = Router();

router.get("/", async (_, res) => {
  const questao = await hardskillController.index();
  res.json(questao);
});

router.get("/:id", async (req, res) => {
  const user = await hardskillController.show(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const questao = await hardskillController.store(req.body);
  res.json(questao);
});

router.put("/:id", async (req, res) => {
  const questao = await hardskillController.update(req.body, req.params.id);
  res.json(questao);
});

router.delete("/:id", async (req, res) => {
  const user = await hardskillController.destroy(req.params.id);
  res.json(user);
});

export default router;
