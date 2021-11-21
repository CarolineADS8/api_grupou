import { Router } from "express";
import userController from "../controller/user.controller";

const router = Router();

router.get("/", async (_, res) => {
  const users = await userController.index();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await userController.show(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const users = await userController.store(req.body);
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const users = await userController.update(req.body, req.params.id);
  res.json(users);
});

router.delete("/:id", async (req, res) => {
  const user = await userController.destroy(req.params.id);
  res.json(user);
});

export default router;
