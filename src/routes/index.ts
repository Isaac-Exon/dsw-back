import { Router, Request, Response } from "express";

// Importando as rotas específicas
import livroRoutes from "./Livro";
import comprasRoutes from "./Compras";
import despesaRoutes from "./Despesas"; // Adicionando a rota de Despesa

const routes = Router();

// Rotas para Livro
routes.use("/livro", livroRoutes);

// Rotas para Compra
routes.use("/compra", comprasRoutes);

// Rotas para Despesa
routes.use("/despesa", despesaRoutes); // Definindo a rota de Despesa

// Rota padrão para requisições desconhecidas
routes.use((_: Request, res: Response) =>
  res.status(404).json({ error: "Requisição desconhecida" })
);

export default routes;
