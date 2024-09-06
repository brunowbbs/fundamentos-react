import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash3Fill } from "react-icons/bs";
import axios from "axios";
import Modal from "react-modal";

import styles from "./app.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function App() {
  const [visibilidadeModal, setVisibilidadeModal] = useState(false);
  const [alunos, setAlunos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState("");
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
  }

  async function removerAluno() {
    try {
      await axios.delete(`https://api-aluno.vercel.app/aluno/${idSelecionado}`);
      buscarAlunos();
      alert("Sucesso ao remover aluno");
      setIdSelecionado("");
      setVisibilidadeModal(false);
    } catch (error) {
      alert("Erro ao remover aluno ");
    }
  }

  function preencherFormulario(aluno) {
    setFormData({
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre,
    });
    setIdSelecionado(aluno._id);
  }

  async function editarAluno(event) {
    event.preventDefault();
    try {
      await axios.put(`https://api-aluno.vercel.app/aluno/${idSelecionado}`, {
        nome: formData.nome,
        matricula: formData.matricula,
        curso: formData.curso,
        bimestre: formData.bimestre,
      });
      setFormData({
        nome: "",
        matricula: "",
        curso: "",
        bimestre: "",
      });
      setIdSelecionado("");
      alert("Aluno editado com sucesso!");
      buscarAlunos();
    } catch (error) {
      alert("Erro ao editar dados do aluno");
    }
  }

  async function buscarAlunos() {
    // setIsLoading(true);
    try {
      const response = await axios.get("https://api-aluno.vercel.app/aluno");
      setAlunos(response.data);
    } catch (error) {
      alert("Erro ao buscar dados dos alunos");
    }
    // setIsLoading(false);
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
      <h1>Diário eletrônico {idSelecionado}</h1>

      <form
        className={styles.form}
        onSubmit={(event) =>
          idSelecionado !== "" ? editarAluno(event) : addAluno(event)
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
            <thead>
              <tr>
                <th>Ordem</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Curso</th>
                <th>Bimestre</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={aluno._id}>
                  <td className={styles.center}>{index + 1}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.curso}</td>
                  <td className={styles.center}>{aluno.bimestre}</td>
                  <td className={styles.center}>
                    <FiEdit
                      color="#0FBA3F"
                      cursor="pointer"
                      onClick={() => preencherFormulario(aluno)}
                    />
                    <BsTrash3Fill
                      color="#F90000"
                      cursor="pointer"
                      onClick={() => {
                        setIdSelecionado(aluno._id);
                        setVisibilidadeModal(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>Nenhum aluno cadastrado</h4>
        )}
      </div>
      <Modal
        isOpen={visibilidadeModal}
        style={customStyles}
        onRequestClose={() => {
          setVisibilidadeModal(false);
          setIdSelecionado("");
        }}
      >
        <h2 style={{ color: "#000" }}>Confirmação</h2>
        <p style={{ color: "#000" }}>Deseja remover o item selecionado?</p>
        <button onClick={removerAluno}>Sim</button>
        <button
          onClick={() => {
            setVisibilidadeModal(false);
            setIdSelecionado("");
          }}
        >
          Não
        </button>
      </Modal>
    </div>
  );
}
