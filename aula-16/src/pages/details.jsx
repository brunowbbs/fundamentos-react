import { useParams } from "react-router-dom";

export default function Details() {
  const parametros = useParams();

  async function getProductById() {
    const response = await axios.get(`https://api.com/${parametros.id}`);
  }

  return (
    <div>
      <h1>Hello Details</h1>

      {JSON.stringify(parametros)}
    </div>
  );
}
