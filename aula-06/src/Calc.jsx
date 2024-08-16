import { useState } from "react";

export default function Calc() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  const [erro, setErro] = useState();
  const [resultado, setResultado] = useState("");

  const [valoresVazios, setValoresVazios] = useState(false);

  function calcular() {
    const result = Number(valor1) + Number(valor2);

    if (valor1 === "" || valor2 === "") {
      setValoresVazios(true);
    } else {
      setValoresVazios(false);
    }

    if (isNaN(result)) {
      setErro("Informe valores válidos");
      setResultado("");
    } else {
      setResultado(result);
      setErro("");
    }

    setValor1("");
    setValor2("");
  }

  return (
    <div>
      <h1>Hello Calc</h1>
      <h3 style={{ color: "red" }}>{erro}</h3>

      {valoresVazios ? <h4>Informe os valores</h4> : null}
      {/* <p>{valor1 || "Nada digitado"}</p>
      <p>{valor2 || "Nada digitado"}</p> */}

      <input
        value={valor1}
        onChange={(event) => setValor1(event.target.value)}
        placeholder="Digite um numero"
      />
      <br />
      <br />
      <input
        value={valor2}
        onChange={(event) => setValor2(event.target.value)}
        placeholder="Digite outro numero"
      />
      <br />
      <br />
      <button
        //disabled={valor1.trim() === "" || valor2.trim() === ""}
        onClick={calcular}
      >
        Calcular
      </button>

      <h2>RESULTADO: {resultado || "-"}</h2>
    </div>
  );
}
