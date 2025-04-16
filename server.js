require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const usersRoutes = require ("./src/routes/usersRoutes");
const postRoutes = require ("./src/routes/postRoutes");


app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 4000;



app.get("/", (req, res) => {
  res.send("Eu amo BackEnd!!🐧");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);     
});