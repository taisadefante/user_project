import React, { useState } from "react";
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
  User,
} from "./styles";

//JSX
const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function addNewUser() {
    //user.push()
    setUsers([{ id: Math.random(), name, age }]);
  }

  function ChangeInputName(event) {
    setName(event.target.value);
  }

  function ChangeInputAge(event) {
    setAge(event.target.value);
  }

  //[{ id: Math.random(), name: "Tais", age: 44 }]

  return (
    <Container>
      <Image alt="logo" src={Imagem1} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={ChangeInputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={ChangeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name} </p> <p> {user.age}</p>
              <button>
                <img src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
