const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.status(200).json({ message: "API rodando com sucesso 🚀" }));

describe("Testes da aplicação", () => {
  it("GET / deve retornar status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("GET / deve retornar mensagem correta", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("API rodando com sucesso 🚀");
  });
});
