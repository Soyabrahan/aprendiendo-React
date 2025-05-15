import { useState } from "react";

//componente boton
type Props = {};

function Button({}: Props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button
      type="button"
      className={`btn ${clicked ? "btn-secondary" : "btn-primary"}`}
      onClick={handleClick}
      disabled={clicked}
    >
      {clicked ? "Cargando..." : "Primary"}
    </button>
  );
}

export default Button;
