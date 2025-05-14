import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["abrahan", "victor", "saul"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title="TITULOOOO" text="texto de la  cartaa" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
