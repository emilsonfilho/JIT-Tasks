import PessoaController from "../controllers/PessoaController.js";
import express from "express";

const router = express.Router();

router.get("/pessoas", PessoaController.findAll);
router.get("/pessoas/:id", PessoaController.findById);
router.delete("/pessoas/:id", PessoaController.deleteById);
router.put("/pessoas/:id", PessoaController.updateById);
router.post("/pessoas", PessoaController.store);

export default router;