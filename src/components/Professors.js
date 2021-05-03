import "./Professors.css";

export default function Professors(props) {
  return (
    <div className="Professors">
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Subject:</strong> {props.subject}
      </p>
    </div>
  );
}
