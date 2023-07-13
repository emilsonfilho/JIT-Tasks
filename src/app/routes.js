import { Router } from "express";

import PessoaRouter from "./routes/Pessoa.js";

const router = Router();

router.use(PessoaRouter);

export default router;