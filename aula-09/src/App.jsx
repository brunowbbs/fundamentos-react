import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash3Fill } from "react-icons/bs";

import styles from "./app.module.css";

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1);
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  function addAluno(event) {
    event.preventDefault();

    setAlunos([
      ...alunos,
      formData,
      // {
      //   nome: formData.nome,
      //   matricula: formData.matricula,
      //   curso: formData.curso,
      //   bimestre: formData.bimestre,
      // },
    ]);

    setFormData({
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    });
    // console.log(formData);
  }

  function removerAluno(posicaoArray) {
    const alunosFiltrados = alunos.filter(
      (aluno, index) => posicaoArray !== index
    );

    setAlunos(alunosFiltrados);
  }

  function preencherFormulario(aluno, index) {
    setIndexSelecionado(index);
    setFormData({
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre,
    });
  }

  function editarAluno(event) {
    event.preventDefault();
    const copiaAlunos = [...alunos];

    copiaAlunos[indexSelecionado].nome = formData.nome;
    copiaAlunos[indexSelecionado].matricula = formData.matricula;
    copiaAlunos[indexSelecionado].curso = formData.curso;
    copiaAlunos[indexSelecionado].bimestre = formData.bimestre;

    setAlunos(copiaAlunos);
    setFormData({
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    });
    setIndexSelecionado(-1);
  }

  return (
    <div className={styles.container}>
      <h1>Diário eletrônico {indexSelecionado}</h1>

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
            // const copyState = {...formData}
            // copyState.nome = event.target.value

            // setFormData(copyState);
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
        <input
          placeholder="Curso"
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value })
          }
        />
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
