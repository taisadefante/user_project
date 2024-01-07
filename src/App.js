import React from "react";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

//JSX
const App = () => {
  return (
    <Container>
      <Image />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <button>Cadastrar</button>
      </ContainerItens>
    </Container>
  );
};

export default App;
