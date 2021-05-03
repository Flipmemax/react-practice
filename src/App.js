import "./App.css";
import Title from "./components/Title";
import Students from "./components/Students";
import Professors from "./components/Professors";

const students = require("./data/Students.json");

const professors = require("./data/Professors.json");

function App() {
  return (
    <div className="App">
      <Title title="Hogwarts Students" />
      <div className="row">
        {students.map((students, index) => (
          <div key={index}>
            <Students
              id={students.id}
              firstName={students.firstName}
              lastName={students.lastName}
              house={students.house}
              gender={students.gender}
              playsQuidditch={students.playsQuidditch}
              age={students.age}
            />
          </div>
        ))}
      </div>
      <Title title="Hogwarts Professors" />
      <div>
        <div className="row">
          {professors.map((professors, index) => (
            <div key={index}>
              <Professors name={professors.name} subject={professors.subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
