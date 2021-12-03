import { Router } from "express";
import controller from "../controller/curso.controller";

const router = Router();

router.get("/", async (_, res) => {
  const list = await controller.index();
  res.json(list);
});

router.get("/:id", async (req, res) => {
  const result = await controller.show(req.params.id);
  res.json(result);
});

router.post("/", async (req, res) => {
  const result = await controller.store(req.body);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const result = await controller.update(req.body, req.params.id);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await controller.destroy(req.params.id);
  res.json(result);
});

export default router;
