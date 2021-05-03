import "./Professors.css";

export default function Professors(props) {
  return (
    <div className="Professors">
      <p>Name: {props.name}</p>
      <p>Subject: {props.subject}</p>
    </div>
  );
}
