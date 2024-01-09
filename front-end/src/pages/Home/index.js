import React, { useState, useRef } from "react";

import axios from "axios";

import Imagem1 from "../../assets/1.png";

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
  //criando novo usuario
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo" src={Imagem1} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
