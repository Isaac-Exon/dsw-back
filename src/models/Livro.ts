import mongoose from "mongoose";
const { Schema } = mongoose;

// Esquema para Livro
const LivroSchema = new Schema(
  {
    titulo: {
      type: String,
      maxlength: [100, "O título pode ter no máximo 100 caracteres"],
      required: [true, "O título é obrigatório"],
    },
    autor: {
      type: String,
      maxlength: [50, "O nome do autor pode ter no máximo 50 caracteres"],
      required: [true, "O nome do autor é obrigatório"],
    },
    ano: {
      type: Number,
      min: [0, "O ano não pode ser menor que 0"],
      max: [9999, "O ano não pode ter mais de 4 dígitos"],
      required: [true, "O ano é obrigatório"],
    },
  },
  { timestamps: true }
);

// Criação do modelo Livro
const Livro = mongoose.model("Livro", LivroSchema);

export default Livro;
