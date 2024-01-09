import React, { useState, useRef, useEffect } from "react";
import Imagem1 from "./assets/1.png";
import Trash from "./assets/lixeira.png";
import axios from "axios";
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

  // react hook => useEffect ( efeito colateral)
  // a minha aplicação inicia (A pagina carregou, useEffect é chamado)
  //quando um estado que está no array de dependencia do useeffect e alterado

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
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
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
