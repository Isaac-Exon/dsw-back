import express from "express";
import cors from "cors"; //
import routes from "./routes";
import dotenv from "dotenv";
import connect from "./models/connection";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:5173", // URL do frontend (React)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connect();

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);
