import "./styles.css";

import img from "../../imgs/img1.svg";

export default function CardCategory(props) {
  return (
    <div
      className="card_category_container"
      style={{
        backgroundColor: props.color,
      }}
    >
      <div className="content">
        <p>{props.title}</p>
        <button>Ver opções</button>
      </div>

      <div>
        <img src={img} />
      </div>
    </div>
  );
}
