function Titulo() {
  //jsx -> react.createElement
  const nombre = "Abrahan";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundoo</h1>;
}

export default Titulo;
