// 1 2 3 4 5 6 7 8
// const numeros = []

import { useState } from "react";

export default function Contador() {
  const [lista, setLista] = useState([]);

  function addItem() {
    // const copiaLista = [...lista, 1];
    // copiaLista.push(1);

    setLista([...lista, Date.now()]);
  }

  return (
    <div>
      <h1>Contador</h1>
      {lista.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={addItem}>Add</button>
    </div>
  );
}
