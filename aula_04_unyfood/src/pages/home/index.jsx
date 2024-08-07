import CardCategory from "../../components/card-category";
import Header from "../../components/header";
import Search from "../../components/search";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <Header />

      <Search />

      <div className="home_container_category">
        <CardCategory title="Comidas" color="#ed1c16" />
        <CardCategory title="Bebidas" color="#009432" />
      </div>

      <h1>Hello Home</h1>
      <p>Hello World</p>
    </div>
  );
}
