import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/button";

function App() {
  const list: string[] = ["samuel", "abrahan"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  return (
    <Card>
      <CardBody title="TITULOOOO" text="texto de la  cartaa" />
      {contenido}
      <p>Boton de ejercicio 1</p>
      <Button />
    </Card>
  );
}

export default App;
