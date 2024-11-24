import { Router } from "express";
import { compraController } from "../controllers/ComprasController";

const router = Router();

// Rotas para Compra
router.post("/", compraController.create);
router.get("/", compraController.list);
router.delete("/:id", compraController.delete);
router.put("/:id", compraController.update);

export default router;
