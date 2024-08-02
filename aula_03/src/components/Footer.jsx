import "./footer.css";

export default function Footer(props) {
  return (
    <footer className="app_footer">
      <p>{props.description || "Desenvolvido por Wesley"}</p>
    </footer>
  );
}
