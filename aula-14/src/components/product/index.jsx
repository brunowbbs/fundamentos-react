import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function Product(props) {
  return (
    <Link to={`/detalhes/${props.produto._id}`}>
      <div className={styles.card}>
        <p>{props.produto.nome}</p>
        <img src={props.produto.url_imagem} />
        <p>{props.produto.fornecedor}</p>
        <p>R$ {props.produto.preco}</p>
      </div>
    </Link>
  );
}
