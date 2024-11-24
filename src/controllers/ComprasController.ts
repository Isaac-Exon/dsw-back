import { Request, Response } from "express";
import Compra from "../models/Compras";

class CompraController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nomeProduto, valorProduto } = req.body;
    try {
      const novaCompra = new Compra({ nomeProduto, valorProduto });
      const compraSalva = await novaCompra.save();
      return res.status(201).json(compraSalva);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao cadastrar item de compra",
        error: error.message,
      });
    }
  }

  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const compras = await Compra.find().sort({ nomeProduto: "asc" });
      return res.json(compras);
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao buscar itens de compra",
        error: error.message,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nomeProduto, valorProduto } = req.body;
    try {
      const compraAtualizada = await Compra.findByIdAndUpdate(
        id,
        { nomeProduto, valorProduto },
        { new: true }
      );
      if (!compraAtualizada) {
        return res
          .status(404)
          .json({ message: "Item de compra não encontrado" });
      }
      return res.json(compraAtualizada);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao atualizar item de compra",
        error: error.message,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const compraDeletada = await Compra.findByIdAndDelete(id);
      if (!compraDeletada) {
        return res
          .status(404)
          .json({ message: "Item de compra não encontrado" });
      }
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao deletar item de compra",
        error: error.message,
      });
    }
  }
}

export const compraController = new CompraController();
