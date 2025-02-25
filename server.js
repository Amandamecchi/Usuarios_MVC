require("dotenv").config();

const express = require("express");
const cors = require("cors");
const usersRoutes = require ("./src/routes/usersRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/usuarios", usersRoutes);

const PORT = process.env.PORT || 4000;



app.get("/", (req, res) => {
  res.send("Eu amo BackEnd!!🐧");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);     
});