import { ReactNode } from "react";

//Componente carta
interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

//fragmento de carta
interface CardBodyProps {
  //aqui estoy indicando el prototipo
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  //aqui le indico que el prototipo se va a guiar de CardBodyProps
  const { title, text } = props; // indico que la const title y const text seran iguales a los que van a llegar de prototipo
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
