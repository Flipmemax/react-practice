import "./App.css";
import Title from "./components/Title";
import Students from "./components/Students";
import Professors from "./components/Professors";
import MagicalCreatures from "./components/MagicalCreatures";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="App">
      <Title title="Hogwarts Students" />
      <Students />
      <Title title="Hogwarts Professors" />
      <Professors />
      <Title title="Magical Creatures" />
      <MagicalCreatures />
      <Title title="Fun Articles for you to read" />
      <Articles />
    </div>
  );
}

export default App;
