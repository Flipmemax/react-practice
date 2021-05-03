export default function StudentsTemplate(props) {
  return (
    <div>
      <p>
        <strong>Name:</strong>
        <br /> {props.firstName} {props.lastName}
      </p>

      <p>
        <strong>Gender: </strong>
        <br />
        {props.gender === "m" ? "Male" : "Female"}
      </p>
      <p>
        <strong>Age:</strong>
        <br /> {props.age}
      </p>
      <p>
        <strong>House:</strong>
        <br /> {props.house}
      </p>
      <p>
        {props.playsQuidditch ? "Plays Quidditch" : "Does not play Quidditch"}
      </p>
    </div>
  );
}
