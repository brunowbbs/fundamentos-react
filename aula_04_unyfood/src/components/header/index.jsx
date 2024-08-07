import Button from "../button";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <h1>Unyfood</h1>
      <nav>
        <ul>
          <li>Categorias</li>
          <li>Restaurantes</li>
          <li>Informações</li>
          <li>Cadastre-se</li>
          <li>
            <Button title="Entrar" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
