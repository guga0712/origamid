import Button from "./Button";
import "./main.css";
import React, { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }
  return (
    <div>
      <p>Total: {total}</p>
      <Button onClick={incrementar} tamanho="1.5rem">
        Incrementar
      </Button>
    </div>
  );
}

export default App;
