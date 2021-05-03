import "./Title.css";

export default function Title(props) {
  return (
    <div className="Title">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
