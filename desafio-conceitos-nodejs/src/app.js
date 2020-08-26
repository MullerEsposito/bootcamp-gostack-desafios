const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

// const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

// LIST
app.get("/repositories", (request, response) => {
  
  return response.status(200).json(repositories);
});
// CREATE
app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = { id: uuid(), title, url, techs, likes : 0 };

  repositories.push(repository);

  return response.status(201).json(repository);
});
// UPDATE
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex < 0) {
    return response.status(400).json({ erro : "Repositório não encontrado!" });
  }  

  const repository = { id, title, url, techs, likes:repositories[repositoryIndex].likes };
  repositories[repositoryIndex] = repository;

  return response.status(200).json(repository);

});
// DELETE
app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if (repositoryIndex < 0) {
    return response.status(400).send();
  }
  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});
// LIKE REPOSITORY
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repository = repositories.find(repository => repository.id == id);

  if (!repository) {
    return response.status(400).json({erro : "Repositório não existe!"});
  }
  repository.likes++;

  return response.status(200).json(repository);
});

module.exports = app;
