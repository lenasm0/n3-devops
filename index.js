const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ app: "N3 DevOps", status: "online", version: "1.0.4", message: "API rodando com sucesso" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime(), timestamp: new Date() });
});

app.listen(PORT, () => console.log(`✅ Servidor rodando em: http://localhost:${PORT}`));
