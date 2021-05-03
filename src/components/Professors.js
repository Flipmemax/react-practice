import "./Professorsstyle.css";
import Professorlist from "../data/Professorlist.json";
import ProfessorsTemplate from "./ProfessorsTemplate";
import LikeButton from "./LikeButton";

export default function Professors() {
  const professors = Professorlist.Professors;

  return (
    <div>
      {professors.map((professors, index) => (
        <div className="Professorsstyle">
          <div key={index}>
            <ProfessorsTemplate
              name={professors.name}
              subject={professors.subject}
            />
          </div>
          <LikeButton />
        </div>
      ))}
    </div>
  );
}
