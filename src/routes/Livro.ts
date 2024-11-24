import { Router } from "express";
import { livroController } from "../controllers/LivroController";

const router = Router();

// Rotas para Livro
router.post("/", livroController.create);
router.get("/", livroController.list);
router.delete("/:id", livroController.delete);
router.put("/:id", livroController.update);

export default router;
