import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/header";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

// const mock = {
//   id: 3,
//   nome: "Teste",
//   fabricante: "fabricante",
//   preco: 899,
//   img: "https://http2.mlstatic.com/D_NQ_NP_952926-MLU72566235918_112023-O.webp",
//   descricao:
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eos nemo. Numquam, aliquid? Rerum esse, assumenda eveniet consequatur magnam blanditiis excepturi sunt odit labore, atque eos illo fugit nobis error?",
// };

export default function Details() {
  const parametros = useParams();

  const [productDetails, setProductDetails] = useState({});

  // alert(JSON.stringify());

  async function getProductDetails() {
    try {
      const response = await axios.get(
        `https://api-produtos-unyleya.vercel.app/produtos/${parametros.id}`
      );
      setProductDetails(response.data);
    } catch (error) {
      alert("Erro ao buscar detalhes do produto");
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div>
          <img src={productDetails.url_imagem} />
        </div>

        <div className={styles.details}>
          <p>{productDetails.nome}</p>
          <p>{productDetails._id}</p>
          <p>R$ {productDetails.preco}</p>
          <p>{productDetails.fornecedor}</p>
          <p>{productDetails.descricao}</p>
        </div>
      </div>
    </div>
  );
}
