import Button from "./Button";
import Input from "./Input";
import "./main.css";
import React, { use, useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div>
      <p>Inicio da Viagem: {data}</p>
      <Input id="nome" marginBottom="1rem" label={"Nome"} />
      <Input id="email" marginBottom="1rem" label={"Email"} />
      <Input
        id="inicio"
        onChange={(event) => setData(event.currentTarget.value)}
        marginBottom="1rem"
        label={"Inicio da Viagem"}
        type="date"
      />
      <Input id="horario" marginBottom="1rem" label={"Horário"} type="time" />
    </div>
  );
}

export default App;
