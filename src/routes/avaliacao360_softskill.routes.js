import { Router } from "express";
import controller from "../controller/avaliacao360_softskill.controller";

const router = Router();

router.post("/:id", async (req, res) => {
  const result = await controller.store(req.body, req.params.id);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await controller.destroy(req.body, req.params.id);
  res.json(result);
});

export default router;
