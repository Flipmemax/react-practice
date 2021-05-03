export default function StudentsTemplate(props) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {props.firstName} {props.lastName}
      </p>

      <p>
        <strong>Gender: </strong>
        {props.gender === "m" ? "Male" : "Female"}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>House:</strong> {props.house}
      </p>
      <p>
        {props.playsQuidditch ? "Plays Quidditch" : "Does not play Quidditch"}
      </p>
    </div>
  );
}
