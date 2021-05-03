import "./Students.css";

export default function Students(props) {
  return (
    <div className="Students">
      <p>Student ID: {props.id}</p>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>House: {props.house}</p>
      <p>
        {props.playsQuidditch ? "Plays Quidditch" : "Does not play Quidditch"}
      </p>
      <p>Age: {props.age}</p>
    </div>
  );
}
