import { Router } from "express";
import AlunoController from "./controllers/AlunoController.js";

const router = Router();

router.get("/alunos", AlunoController.findAll);
router.get("/alunos/:id", AlunoController.findById);
router.delete("/alunos/:id", AlunoController.deleteById);
router.put("/alunos/:id", AlunoController.updateById);
router.post("/alunos", AlunoController.store);

export default router;
