import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["abrahan", "victor", "saul"];

  return (
    <Card>
      <CardBody title="TITULOOOO" text="texto de la  cartaa" />
      <List data={list} />
    </Card>
  );
}

export default App;
