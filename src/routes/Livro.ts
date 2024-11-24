import { Router } from "express";
import { despesaController } from "../controllers/DespesaController";

const router = Router();

// Rotas para Despesa
router.post("/", despesaController.create); // Criar despesa
router.get("/", despesaController.list); // Listar despesas
router.delete("/:id", despesaController.delete); // Deletar despesa
router.put("/:id", despesaController.update); // Atualizar despesa
router.get("/total", despesaController.calcularTotalDespesas); // Calcular total das despesas

export default router;
