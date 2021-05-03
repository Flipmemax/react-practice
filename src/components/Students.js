import "./Students.css";

export default function Students(props) {
  return (
    <div className="Students">
      <p>
        <strong>Student ID:</strong> {props.id}
      </p>
      <p>
        <strong>First name:</strong> {props.firstName}
      </p>
      <p>
        <strong>Last name:</strong> {props.lastName}
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
