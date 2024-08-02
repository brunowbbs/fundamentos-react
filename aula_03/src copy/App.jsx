import "./app.css";

import Card from "./Card";

// COMPONENTIZAÇÃO
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

export default function App() {
  return (
    <div>
      <header className="container_home">
        <h1>FF Infnet</h1>

        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li>Quem somos</li>
        </ul>
      </header>

      <h2 className="subtitle">Fast-Food Infnet</h2>

      <div className="container_cards">
        <Card
          titulo="Feijoada"
          descricao="Um prato típico brasileiro"
          img={img1}
        />

        <Card
          titulo="Camarão"
          descricao="Um outro prato típico brasileiro"
          img={img2}
        />

        <Card
          titulo="Coxinha"
          descricao="Um outro prato típico brasileiro"
          img={img3}
        />

        <Card />
      </div>

      <footer className="footer">
        <p>Todos os direitos reservados - 2024</p>
      </footer>
    </div>
  );
}
