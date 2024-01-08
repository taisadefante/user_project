import React from "react";
import Imagem1 from "./assets/1.png";
import Trash from "./assets/lixeira.png";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  user,
} from "./styles";

//JSX
const App = () => {
  const users = [
    { id: Math.random(), name: "Tais", age: 44 },
    { id: Math.random(), name: "Tais", age: 44 },
  ];

  return (
    <Container>
      <Image alt="logo" src={Imagem1} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar</Button>

        <ul>
          {users.map((user) => (
            <user key={user.id}>
              <p> {user.name} </p> <p> {user.age}</p>
              <button>
                <img src={Trash} />
              </button>
            </user>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
