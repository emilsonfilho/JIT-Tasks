import EventoController from "../controllers/EventoController.js";
import express from "express";

const router = express.Router();

router.get("/evento", EventoController.findAll);
router.get("/evento/:id", EventoController.findById);
router.delete("/evento/:id", EventoController.deleteById);
router.put("/evento/:id", EventoController.updateById);
router.post("/evento", EventoController.store);

export default router;