import "./App.css";
import Title from "./components/Title";
import Students from "./components/Students";
import Professors from "./components/Professors";

const students = [
  {
    id: 1,
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    gender: "f",
    playsQuidditch: false,
    age: 16,
  },
  {
    id: 2,
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    gender: "m",
    playsQuidditch: true,
    age: 16,
  },
  {
    id: 3,
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    gender: "m",
    playsQuidditch: true,
    age: 16,
  },
  {
    id: 4,
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    gender: "m",
    playsQuidditch: true,
    age: 16,
  },
  {
    id: 5,
    firstName: "Luna",
    lastName: "Lovegood",
    house: "Ravenclaw",
    gender: "f",
    playsQuidditch: false,
    age: 16,
  },
  {
    id: 6,
    firstName: "Ginny",
    lastName: "Weasley",
    house: "Gryffindor",
    gender: "f",
    playsQuidditch: true,
    age: 15,
  },
  {
    id: 7,
    firstName: "Cedric",
    lastName: "Diggory",
    house: "Hufflepuff",
    gender: "m",
    playsQuidditch: true,
    age: 18,
  },
  {
    id: 8,
    firstName: "Ana",
    lastName: "Abbot",
    house: "Hufflepuff",
    gender: "f",
    playsQuidditch: false,
    age: 16,
  },
  {
    id: 9,
    firstName: "Pansy",
    lastName: "Parkinson",
    house: "Slytherin",
    gender: "f",
    playsQuidditch: false,
    age: 16,
  },
  {
    id: 10,
    firstName: "Padma",
    lastName: "Patil",
    house: "Ravenclaw",
    gender: "f",
    playsQuidditch: false,
    age: 16,
  },
];

const professors = [
  {
    name: "Minerva",
    subject: "Transfiguration",
  },
  {
    name: "Snape",
    subject: "Potions",
  },
  {
    name: "Flitwick",
    subject: "Spells",
  },
];

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
