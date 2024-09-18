import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import { styleToast, styleToastSuccess } from "./utils";

function App() {
  const [formState, setFormState] = useState({ nome: "", ano: "" });

  const [formErros, setFormErros] = useState({ nome: "", ano: "" });

  const [filmes, setFilmes] = useState([]);

  function carregarFilmesBD() {
    const filmesCarregados = localStorage.getItem("@filmes");

    if (filmesCarregados) {
      const filmesConvertidos = JSON.parse(filmesCarregados);
      setFilmes(filmesConvertidos);
    }
  }

  useEffect(() => {
    carregarFilmesBD();
  }, []);

  function salvarFilme() {
    if (formState.nome && formState.ano) {
      const ID = nanoid();

      setFilmes([
        ...filmes,
        { nome: formState.nome, ano: formState.ano, id: ID },
      ]);

      localStorage.setItem(
        "@filmes",
        JSON.stringify([
          ...filmes,
          { nome: formState.nome, ano: formState.ano, id: ID },
        ])
      );

      // setFormErros({ nome: "", ano: "" });
      toast("Filme salvo com sucesso", {
        style: styleToastSuccess,
        hideProgressBar: true,
      });
    } else {
      toast("Preencha todos os campos antes de salvar", {
        style: styleToast,
        hideProgressBar: true,
      });
    }
  }

  function removerFilme(id) {
    const filmesFiltrados = filmes.filter((filme) => filme.id !== id);

    setFilmes(filmesFiltrados);

    localStorage.setItem("@filmes", JSON.stringify(filmesFiltrados));
  }

  return (
    <>
      <form>
        <div>
          <input
            placeholder="Nome do filme"
            value={formState.nome}
            onChange={(evento) =>
              setFormState({ ...formState, nome: evento.target.value })
            }
          />
          <span style={{ color: "red" }}>{formErros.nome}</span>
        </div>
        <div>
          <input
            placeholder="Ano"
            value={formState.ano}
            onChange={(evento) =>
              setFormState({ ...formState, ano: evento.target.value })
            }
          />
          <span style={{ color: "red" }}>{formErros.ano}</span>
        </div>
        <button type="button" onClick={salvarFilme}>
          Salvar
        </button>
        <ToastContainer />
      </form>

      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            {filme.nome}{" "}
            <button onClick={() => removerFilme(filme.id)}>Apagar</button>
          </li>
        ))}
      </ul>
      {/* {JSON.stringify(filmes)} */}
    </>
  );
}

export default App;
