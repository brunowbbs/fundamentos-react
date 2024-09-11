import axios from "axios";

import Header from "../../components/header";
import Product from "../../components/product";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

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

      <button className={styles.float_button}>+</button>
    </div>
  );
}
