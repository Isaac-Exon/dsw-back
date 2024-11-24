import { Request, Response } from "express";
import Livro from "../models/Livro";

class LivroController {
  // Criar um livro
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, autor, ano } = req.body;
    try {
      const novoLivro = new Livro({ titulo, autor, ano });
      const livroSalvo = await novoLivro.save();
      return res.status(201).json(livroSalvo);
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar livro", error: error.message });
    }
  }

  // Listar todos os livros
  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const livros = await Livro.find().sort({ titulo: "asc" });
      return res.json(livros);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar livros", error: error.message });
    }
  }

  // Atualizar um livro
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { titulo, autor, ano } = req.body;
    try {
      const livroAtualizado = await Livro.findByIdAndUpdate(
        id,
        { titulo, autor, ano },
        { new: true }
      );
      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      return res.json(livroAtualizado);
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: "Erro ao atualizar livro", error: error.message });
    }
  }

  // Deletar um livro
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const livroDeletado = await Livro.findByIdAndDelete(id);
      if (!livroDeletado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      return res.status(204).send();
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar livro", error: error.message });
    }
  }
}

export const livroController = new LivroController();
