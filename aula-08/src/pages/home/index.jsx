import { useState, useEffect } from "react";
import { FaBeer, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  //  { titulo: "", categoria: "", data: "", descricao: "" },

  // const [primeiraRenderizacao, setPrimeiraRenderizacao] = useState(true);

  const [tarefas, setTarefas] = useState([]);

  function salvarTarefa(event) {
    event.preventDefault();

    const copy = [...tarefas];

    copy.push({
      titulo: titulo,
      categoria: categoria,
      data: data,
      descricao: descricao,
    });

    setTarefas(copy);

    localStorage.setItem("@tarefas", JSON.stringify(copy));

    setTitulo("");
    setCategoria("");
    setData("");
    setDescricao("");
  }

  function apagarTarefa(indexTask) {
    const arrayFiltrado = tarefas.filter(
      (tarefas, index) => indexTask !== index
    );

    setTarefas(arrayFiltrado);
  }

  function recuperarTarefas() {
    // alert("ok");
    const tarefasString = localStorage.getItem("@tarefas");

    if (tarefasString) {
      const tarefasJSON = JSON.parse(tarefasString);

      setTarefas(tarefasJSON);
    }
  }

  useEffect(() => {
    recuperarTarefas();
  }, []);

  // useEffect(() => {
  //   if (primeiraRenderizacao) {
  //     setPrimeiraRenderizacao(false);
  //   } else {
  //     recuperarTarefas();
  //   }
  // }, [titulo]);

  // useEffect(() => {
  //   alert("ok");
  // }, [titulo]);

  // useEffect(() => {
  //   recuperarTarefas();
  // }, []);

  // recuperarTarefas();

  return (
    <div className={styles.container}>
      <div className={styles.container_form}>
        <form className={styles.form} onSubmit={(event) => salvarTarefa(event)}>
          <h2>Nova tarefa</h2>
          <FaBeer color="red" size={30} />
          {/* <button type="button" onClick={recuperarTarefas}>
            Recuperar tarefas
          </button> */}

          <input
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Título"
          />

          <select
            defaultValue={categoria}
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option>Selecione...</option>
            <option>Trabalhar</option>
            <option>Estudar</option>
          </select>

          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
            placeholder="Data"
          />

          <input
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            placeholder="Descrição"
          />

          <button type="submit">Salvar</button>
        </form>
      </div>

      <div className={styles.container_list}>
        <div className={styles.container_title}>
          <h3>Lista de tarefas</h3>
          <p>Total: {tarefas.length} tarefas</p>
        </div>

        {tarefas.length > 0 ? (
          <>
            {tarefas.map((tarefa, index) => (
              <div className={styles.card} style={{ marginBottom: 5 }}>
                <div>
                  <p className={styles.bold}>{tarefa.titulo}</p>
                  <p>{tarefa.categoria}</p>
                  <p>{tarefa.descricao}</p>
                </div>
                <div>
                  <p className={styles.bold}>{tarefa.data}</p>
                  <AiFillDelete
                    color="red"
                    size={40}
                    onClick={() => apagarTarefa(index)}
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Nenhum item para ser exibido</p>
        )}
      </div>
    </div>
  );
}
