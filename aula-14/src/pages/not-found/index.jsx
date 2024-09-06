import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <h1>Oppps. nao encontramos essa página</h1>
      <button onClick={goBack}>Voltar para a tela inicial</button>
    </div>
  );
}
