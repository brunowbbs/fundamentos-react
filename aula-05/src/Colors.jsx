import { useState } from "react";

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

export default function Colors() {
  const [color, setColor] = useState("");

  //   setColor(colorGenerated);

  function generateColor() {
    setColor(random_hex_color_code());
  }

  function onClick(name) {
    console.log(name);
    generateColor("Wesley");
  }

  return (
    <div style={{ background: color }}>
      <h1>Colors</h1>

      <button onClick={generateColor}>Gerar cor</button>
      <button onClick={() => onClick("Wesley")}>Gerar cor</button>
    </div>
  );
}
