const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(express.json());

app.use(cors());

const users = [];

//middleware
const checkUserId = (req, res, next) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error: "User not found." });
  }

  req.userIndex = index;
  req.userId = id;

  next();
};

//exibir tudo
app.get("/users", (req, res) => {
  return res.json({ users });
});

// cadastrar
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  const user = { id: uuid.v4(), name, age };

  users.push(user);

  return res.status(201).json(user);
});

//alterar
app.put("/users/:id", checkUserId, (req, res) => {
  const { name, age } = req.body;
  const index = req.userIndex;
  const id = req.userId;

  const updateUser = { id, name, age };

  // Verificar se o nome foi fornecido
  if (name === undefined) {
    return res
      .status(400)
      .json({ error: "Name is required for updating user." });
  }

  users[index] = updateUser;

  return res.json(updateUser);
});

//deletar
app.delete("/users/:id", checkUserId, (req, res) => {
  const index = req.userIndex;

  users.splice(index, 1);

  return res.status(204).json(users);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}.`);
});
