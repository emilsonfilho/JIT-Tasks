import PetianoController from "../controllers/PetianoController.js";
import express from "express";

const router = express.Router();

router.get("/petianos", PetianoController.findAll);
router.get("/petianos/:id", PetianoController.findById);
router.delete("/petianos/:id", PetianoController.deleteById);
router.put("/petianos/:id", PetianoController.updateById);
router.post("/petianos", PetianoController.store);

export default router;