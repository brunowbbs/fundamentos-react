import Button from "../button";
import "./styles.css";

export default function Informations() {
  return (
    <div className="informations_container">
      <h3>Informações</h3>

      <div className="container_cards_info">
        <CardInfo />
        <CardInfo />
      </div>
    </div>
  );
}

function CardInfo() {
  return (
    <div className="card_info">
      <img src="data:image/png;base64,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" />

      <div>
        <p>Titulo</p>
        <p>Descrição</p>

        <Button title="saiba mais" />
      </div>
    </div>
  );
}
