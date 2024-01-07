const express = require("express");
const uuid = require("uuid");

const port = 3000;

const app = express();

app.use(express.json());

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
  try {
    const { name, idade } = req.body;

    if (idade < 18) throw new Error("Only allowed users over 18 anos");

    const user = { id: uuid.v4(), name, idade };

    users.push(user);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    console.log("terminou tudo");
  }
});

//alterar
app.put("/users/:id", checkUserId, (req, res) => {
  const { name, idade, sexo } = req.body;
  const index = req.userIndex;
  const id = req.userId;

  const updateUser = { id, name, idade };

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

app.listen(3000, () => {
  console.log(`App rodando na porta ${port}.`);
});
