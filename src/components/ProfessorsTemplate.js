export default function Professors(props) {
  return (
    <div>
      <p>
        <strong>Name:</strong>
        <br /> {props.name}
      </p>
      <p>
        <strong>Subject:</strong>
        <br /> {props.subject}
      </p>
    </div>
  );
}
