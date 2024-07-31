import "./app.css";

// COMPONENTIZAÇÃO

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";

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
        <div className="card">
          <img src={img1} />
          <p>Titulo de teste</p>
          <p className="description">Descriçao de teste do prato</p>
        </div>

        <div className="card">
          <img src={img2} />
          <p>Titulo de teste</p>
          <p className="description">Descriçao de teste do prato</p>
        </div>

        <div className="card">
          <img src={img3} />
          <p>Titulo de teste</p>
          <p className="description">Descriçao de teste do prato</p>
        </div>

        <div className="card">
          <img src={img4} />
          <p>Titulo de teste</p>
          <p className="description">Descriçao de teste do prato</p>
        </div>

        <div className="card">
          <img src={img5} />
          <p>Titulo de teste</p>
          <p className="description">Descriçao de teste do prato</p>
        </div>
      </div>

      <footer className="footer">
        <p>Todos os direitos reservados - 2024</p>
      </footer>
    </div>
  );
}
