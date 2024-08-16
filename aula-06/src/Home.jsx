import { useState } from "react";

export default function Home() {
  const [valor, setValor] = useState(0);

  const [anoNascimento, setAnoNascimento] = useState("");

  function calcularIdade() {
    const resultado = 2024 - anoNascimento;
    setValor(resultado);

    setAnoNascimento("");
  }

  return (
    <div>
      <h1>{valor}</h1>

      <input
        value={anoNascimento}
        onChange={(event) => setAnoNascimento(event.target.value)}
      />

      <button onClick={calcularIdade}>Calcular</button>
    </div>
  );
}
