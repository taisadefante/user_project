import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Imagem1 from "../../assets/1.png";

import H1 from "../../componentes/Title";

import ContainerItens from "../../componentes/ContainerItens";

import Button from "../../componentes/Buton";

import { Container, Image, InputLabel, Input } from "./styles";

//JSX
function App() {
  //criando novo usuario
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
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
}

export default App;
