import Card, { CardBody } from "./components/Card";
import List from "./components/List";

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
    </Card>
  );
}

export default App;
