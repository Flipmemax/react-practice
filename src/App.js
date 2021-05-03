import "./App.css";
import Title from "./components/Title";
import Students from "./components/Students";
import Professors from "./components/Professors";

function App() {
  return (
    <div className="App">
      <Title title="Hogwarts Students" />
      <Students />
      <Title title="Hogwarts Professors" />
      <Professors />
    </div>
  );
}

export default App;
