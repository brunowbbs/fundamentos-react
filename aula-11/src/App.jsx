import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash3Fill } from "react-icons/bs";
import axios from "axios";

import styles from "./app.module.css";

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1);
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  async function addAluno(event) {
    event.preventDefault();

    try {
      await axios.post("https://api-aluno.vercel.app/aluno", {
        nome: formData.nome,
        matricula: formData.matricula,
        curso: formData.curso,
        bimestre: formData.bimestre,
      });
      buscarAlunos();
      alert("Sucesso ao salvar aluno");
    } catch (error) {
      alert("Erro ao salvar aluno ");
    }
    // finally {// }
  }

  function removerAluno(posicaoArray) {}

  function preencherFormulario(aluno, index) {}

  function editarAluno(event) {}

  async function buscarAlunos() {
    try {
      const response = await axios.get("https://api-aluno.vercel.app/aluno");
      setAlunos(response.data);
    } catch (error) {
      alert("Erro ao buscar dados dos alunos");
    }
  }

  async function buscarCursos() {
    try {
      const response = await axios.get("https://api-aluno.vercel.app/cursos");
      setCursos(response.data.cursos);
    } catch (error) {
      alert("Erro ao buscar cursos");
    }
  }

  useEffect(() => {
    buscarAlunos();
  }, []);

  useEffect(() => {
    buscarCursos();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Diário eletrônico {indexSelecionado}</h1>

      <button onClick={buscarAlunos}>Buscar alunos</button>

      <form
        className={styles.form}
        onSubmit={(event) =>
          indexSelecionado >= 0 ? editarAluno(event) : addAluno(event)
        }
      >
        <input
          placeholder="Nome"
          value={formData.nome}
          onChange={(event) => {
            setFormData({ ...formData, nome: event.target.value });
          }}
        />
        <input
          placeholder="Matrícula"
          value={formData.matricula}
          onChange={(event) =>
            setFormData({ ...formData, matricula: event.target.value })
          }
        />
        <select
          placeholder="Curso"
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value })
          }
        >
          <option>Selecione um curso</option>
          {cursos.map((curso) => (
            <option key={curso.id}>{curso.name}</option>
          ))}
        </select>
        <input
          placeholder="Bimestre"
          value={formData.bimestre}
          onChange={(event) =>
            setFormData({ ...formData, bimestre: event.target.value })
          }
        />

        <button type="submit">Salvar</button>
      </form>

      <div className={styles.container_table}>
        <h3>Alunos Cadastrados</h3>

        {alunos.length > 0 ? (
          <table className={styles.table}>
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Curso</th>
              <th>Bimestre</th>
              <th>Ações</th>
            </tr>

            {alunos.map((aluno, index) => (
              <tr>
                <td className={styles.center}>{index + 1}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.matricula}</td>
                <td>{aluno.curso}</td>
                <td className={styles.center}>{aluno.bimestre}</td>
                <td className={styles.center}>
                  <FiEdit
                    color="#0FBA3F"
                    cursor="pointer"
                    onClick={() => preencherFormulario(aluno, index)}
                  />
                  <BsTrash3Fill
                    color="#F90000"
                    cursor="pointer"
                    onClick={() => removerAluno(index)}
                  />
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h4>Nenhum aluno cadastrado</h4>
        )}
      </div>
    </div>
  );
}
