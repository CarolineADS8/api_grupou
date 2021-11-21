import { Router } from "express";
import user from "./user.routes";
import questao from "./questao.routes";
import hardskill from "./hardskill.routes";
import alunoHardskills from "./aluno_hardskill.routes";

const router = Router();
router.use("/usuario", user);
router.use("/questao", questao);
router.use("/hardskill", hardskill);
router.use("/aluno_hardskills", alunoHardskills);

export default router;
