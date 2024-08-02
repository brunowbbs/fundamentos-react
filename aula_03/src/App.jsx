import "./app.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

// COMPONENTIZAÇÃO
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

export default function App() {
  return (
    <div>
      <Header />

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

      <Footer description="Todos os direitos reservados - 2024" />
    </div>
  );
}
