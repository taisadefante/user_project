import React from "react";
import Imagem1 from "./assets/1.png";
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
      <Image alt="logo" src={Imagem1} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
