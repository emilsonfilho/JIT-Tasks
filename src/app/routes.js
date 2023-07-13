import { Router } from "express";

import PessoaRouter from "./routes/Pessoa.js";
import PetianoRouter from "./routes/Petiano.js";

const router = Router();

router.use(PessoaRouter);
router.use(PetianoRouter);

export default router;