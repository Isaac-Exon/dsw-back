import { Router, Request, Response } from "express";

import livroRoutes from "./Livro";
import comprasRoutes from "./Compras";

const routes = Router();

// Rotas para Livro
routes.use("/livro", livroRoutes);

// Rotas para Compra
routes.use("/compra", comprasRoutes);

// Rota padrão para requisições desconhecidas
routes.use((_: Request, res: Response) =>
  res.status(404).json({ error: "Requisição desconhecida" })
);

export default routes;
