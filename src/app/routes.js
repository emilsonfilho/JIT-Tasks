import { Router } from "express";

import PessoaRouter from "./routes/Pessoa.js";
import PetianoRouter from "./routes/Petiano.js";
import EventoTipoRouter from "./routes/EventoTipo.js";

const router = Router();

router.use(PessoaRouter);
router.use(PetianoRouter);
router.use(EventoTipoRouter);

export default router;