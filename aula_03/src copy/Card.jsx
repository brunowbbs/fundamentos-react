//PROPS

export default function Card(props) {
  //   if (!props.titulo) {
  //     return <p>Card nao vai ser mostrado</p>;
  //   }

  return (
    <div className="card">
      <img
        width={100}
        src={
          props.img
            ? props.img
            : "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"
        }
      />
      <p>{props.titulo ? props.titulo : "Titulo invalido"}</p>
      {/* <p>{props.titulo || "Titulo invalido"}</p> */}
      <p className="description">
        {props.descricao ? props.descricao : "Descrição nao recebida"}
      </p>
    </div>
  );
}
