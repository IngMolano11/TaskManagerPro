
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./config/db";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Conectar a MongoDB y levantar servidor
const PORT = process.env.PORT || 3000;
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  });
});
