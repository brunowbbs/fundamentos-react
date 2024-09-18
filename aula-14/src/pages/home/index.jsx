import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";

import axios from "axios";

import Header from "../../components/header";
import Product from "../../components/product";

import styles from "./styles.module.css";
import "react-responsive-modal/styles.css";

// const mock = [
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 1,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 2,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
//   {
//     id: 3,
//     nome: "Teste",
//     fabricante: "fabricante",
//     preco: 899,
//     img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   },
// ];

export default function Home() {
  const [visibildadeModal, setVisibilidadeModal] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    fornecedor: "",
    url: "",
    descricao: "",
  });

  const [produtos, setProdutos] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://api-produtos-unyleya.vercel.app/produtos"
      );
      setProdutos(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function criarProduto() {
    try {
      await axios.post("https://api-produtos-unyleya.vercel.app/produtos", {
        nome: formData.nome,
        preco: formData.preco,
        fornecedor: formData.fornecedor,
        url_imagem: formData.url,
        descricao: formData.descricao,
      });
      getProducts();
      setVisibilidadeModal(false);
      setFormData({
        nome: "",
        preco: "",
        fornecedor: "",
        url: "",
        descricao: "",
      });
      alert("Produto criado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar produto!");
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Produtos</h2>

        <div className={styles.container_list}>
          {produtos.map((produto) => (
            <Product key={produto._id} produto={produto} />
          ))}
        </div>
      </div>

      <button
        className={styles.float_button}
        onClick={() => setVisibilidadeModal(true)}
      >
        +
      </button>

      <Modal
        center
        open={visibildadeModal}
        onClose={() => setVisibilidadeModal(false)}
      >
        <div className={styles.container_modal}>
          <h3>Cadastrar produto</h3>

          <input
            value={formData.nome}
            onChange={(event) =>
              setFormData({ ...formData, nome: event.target.value })
            }
            placeholder="Nome do produto"
          />

          <div className={styles.row}>
            <input
              placeholder="Preço"
              value={formData.preco}
              onChange={(event) =>
                setFormData({ ...formData, preco: event.target.value })
              }
            />
            <input
              placeholder="Fornecedor"
              value={formData.fornecedor}
              onChange={(event) =>
                setFormData({ ...formData, fornecedor: event.target.value })
              }
            />
          </div>

          <input
            placeholder="URL da imagem"
            value={formData.url}
            onChange={(event) =>
              setFormData({ ...formData, url: event.target.value })
            }
          />

          <textarea
            placeholder="Descrição"
            value={formData.descricao}
            onChange={(event) =>
              setFormData({ ...formData, descricao: event.target.value })
            }
          ></textarea>

          <div className={styles.row}>
            <button onClick={criarProduto}>Salvar</button>
            <button onClick={() => setVisibilidadeModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
