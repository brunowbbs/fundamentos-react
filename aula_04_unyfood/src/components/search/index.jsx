import Button from "../button";
import "./styles.css";

export default function Search() {
  return (
    <section className="search_container">
      <h2>Nosso objetivo e servir você!</h2>

      <div className="container_input">
        <input placeholder="Encontre um restaurante perto de você" />

        <Button title="Encontrar" />
      </div>
    </section>
  );
}
