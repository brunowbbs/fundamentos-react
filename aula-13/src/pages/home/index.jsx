import { Link, useNavigation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigation();

  function navegarParaProduto() {
    // alert("ok");
    navigate("/produtos");
  }

  return (
    <div>
      <h1>Hello Home</h1>
      <Link to="/produtos/KA">Ir para a tela de produtos</Link>
      <br />
      <button onClick={navegarParaProduto}>Ir para produtos</button>
    </div>
  );
}
