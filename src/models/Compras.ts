import mongoose from "mongoose";
const { Schema } = mongoose;

const CompraSchema = new Schema(
  {
    nomeProduto: {
      type: String,
      maxlength: [100, "O nome do produto pode ter no máximo 100 caracteres"],
      required: [true, "O nome do produto é obrigatório"],
    },
    valorProduto: {
      type: Number,
      min: [0, "O valor do produto não pode ser negativo"],
      required: [true, "O valor do produto é obrigatório"],
    },
  },
  { timestamps: true }
);

const Compra = mongoose.model("Compra", CompraSchema);

export default Compra;
