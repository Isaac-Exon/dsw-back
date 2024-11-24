import mongoose from "mongoose";
const { Schema } = mongoose;

const DespesaSchema = new Schema(
  {
    descricao: {
      type: String,
      maxlength: [
        200,
        "A descrição da despesa pode ter no máximo 200 caracteres",
      ],
      required: [true, "A descrição da despesa é obrigatória"],
    },
    valor: {
      type: Number,
      min: [0, "O valor da despesa não pode ser negativo"],
      required: [true, "O valor da despesa é obrigatório"],
    },
    dataDespesa: {
      type: Date,
      required: [true, "A data da despesa é obrigatória"],
    },
  },
  { timestamps: true }
);

const Despesa = mongoose.model("Despesa", DespesaSchema);

export default Despesa;
