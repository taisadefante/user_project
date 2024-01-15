import express from "express";
import { v4 } from "uuid";
import cors from "cors";

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

/* 
        comando executor do servidor "npm run (nome do script)"        

        - Query params => MediaQueryListEvent.com/users?nome=anderson&age=27  // FILTROS
        - Route params => /users/2   // BUSCAR, DELETAR OU ATUALIZAR ALOGO ESPECÍFICO
        - Request Body => { "name:"Anderson", "age":}

        - GET          => Buscar informações no bakc-end
        - POST         => Criar informações no back-end
        - PUT / PATCH  => Alterar/Atualizar informações no bakc-end
        - DELETE       => Deletar informações no back-end

        - Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados de requisição
 */

const users = [];

const checkUserId = (request, response, next) => {
  const { id } = request.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return response.status(404).json({ message: "user not found" });
  }

  request.userIndex = index;
  request.userId = id;

  next();
};

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  const user = { id: v4(), name, age };

  users.push(user);

  return response.status(201).json(user);
});

app.put("/users/:id", checkUserId, (request, response) => {
  const { name, age } = request.body;
  const index = request.userIndex;
  const id = request.userId;

  const updatedUser = { id, name, age };

  users[index] = updatedUser;

  return response.json(updatedUser);
});

app.delete("/users/:id", checkUserId, (request, response) => {
  const index = request.userIndex;

  users.splice(index, 1);

  return response.status(204).json(users);
});

app.listen(port, () => {
  console.log(`🌎 Server started on port ${port} 🚀`);
});
