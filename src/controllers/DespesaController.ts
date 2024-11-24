import { Request, Response } from "express";
import Despesa from "../models/Despesa";

class DespesaController {
  // Criar uma nova despesa
  public async create(req: Request, res: Response): Promise<Response> {
    const { descricao, valor, dataDespesa } = req.body;
    try {
      const novaDespesa = new Despesa({
        descricao,
        valor,
        dataDespesa,
      });
      const despesaSalva = await novaDespesa.save();
      return res.status(201).json(despesaSalva);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao cadastrar despesa",
        error: error.message,
      });
    }
  }

  // Listar todas as despesas
  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const despesas = await Despesa.find().sort({ dataDespesa: -1 }); // Ordena pela data (mais recente primeiro)
      return res.json(despesas);
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao buscar despesas",
        error: error.message,
      });
    }
  }

  // Atualizar uma despesa existente
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { descricao, valor, dataDespesa } = req.body;
    try {
      const despesaAtualizada = await Despesa.findByIdAndUpdate(
        id,
        { descricao, valor, dataDespesa },
        { new: true }
      );
      if (!despesaAtualizada) {
        return res.status(404).json({ message: "Despesa não encontrada" });
      }
      return res.json(despesaAtualizada);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao atualizar despesa",
        error: error.message,
      });
    }
  }

  // Deletar uma despesa
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const despesaDeletada = await Despesa.findByIdAndDelete(id);
      if (!despesaDeletada) {
        return res.status(404).json({ message: "Despesa não encontrada" });
      }
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao deletar despesa",
        error: error.message,
      });
    }
  }

  // Calcular o total de despesas
  public async calcularTotalDespesas(
    _: Request,
    res: Response
  ): Promise<Response> {
    try {
      const despesas = await Despesa.find();
      const total = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
      return res.status(200).json({ total: total.toFixed(2) });
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao calcular o total das despesas",
        error: error.message,
      });
    }
  }
}

export const despesaController = new DespesaController();
