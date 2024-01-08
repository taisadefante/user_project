import React, { useState, useRef } from "react";
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

  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    //spred operator
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  //[{ id: Math.random(), name: "Tais", age: 44 }]

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
