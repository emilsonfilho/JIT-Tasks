import EventoTipoController from "../controllers/EventoTipoController.js";
import express from "express";

const router = express.Router();

router.get("/eventotipos", EventoTipoController.findAll);
router.get("/eventotipos/:id", EventoTipoController.findById);
router.delete("/eventotipos/:id", EventoTipoController.deleteById);
router.put("/eventotipos/:id", EventoTipoController.updateById);
router.post("/eventotipos", EventoTipoController.store);

export default router;