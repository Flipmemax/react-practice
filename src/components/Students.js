import "./Studentstyle.css";
import Studentlist from "../data/Studentlist.json";
import StudentsTemplate from "./StudentsTemplate";
import LikeButton from "./LikeButton";

export default function Students() {
  const students = Studentlist.Students;

  return (
    <div>
      {students.map((students) => (
        <div className="Studentstyle">
          <div key={students.id}>
            <StudentsTemplate
              firstName={students.firstName}
              lastName={students.lastName}
              house={students.house}
              gender={students.gender}
              playsQuidditch={students.playsQuidditch}
              age={students.age}
            />
            <LikeButton />
          </div>
        </div>
      ))}
    </div>
  );
}
