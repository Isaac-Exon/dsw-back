import { Router } from "express";
import { despesaController } from "../controllers/DespesaController";

const router = Router();

// Rotas para Despesa
router.post("/", despesaController.create);
router.get("/", despesaController.list);
router.delete("/:id", despesaController.delete);
router.put("/:id", despesaController.update);
router.get("/total", despesaController.calcularTotalDespesas);

export default router;
