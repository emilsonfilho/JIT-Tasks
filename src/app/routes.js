import { Router } from "express";
import TaskController from "./controllers/TaskController.js";

const router = Router();

router.get("/tasks", TaskController.findAll);
router.get("/tasks/pending", TaskController.findAllPending);
router.get("/tasks/finished", TaskController.findAllFinished);
router.get("/tasks/metrics", TaskController.getMetrics);
router.get("/tasks/:id", TaskController.findById);
router.delete("/tasks/:id", TaskController.deleteById);
router.put("/tasks/:id", TaskController.updateById);
router.post("/tasks", TaskController.store);

export default router;
