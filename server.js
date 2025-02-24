require("dotenv").config();
const usersRoutes = require("./routes/usersRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/api", usersRoutes);

app.get("/", (req, res) => {
    res.send("Eu amo BackEnd!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});