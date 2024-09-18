import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        {[
          { nome: "Banana", id: 1 },
          { nome: "Maracuja", id: 1 },
        ].map((fruta) => (
          <Link to={`/details/${fruta.id}/${fruta.nome}`}>
            <li>{fruta.nome}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
