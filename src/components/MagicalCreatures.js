import "./Creaturestyle.css";
import Creaturelist from "../data/MagicalCreatures.json";
import CreatureTemplate from "./MagicalCreatureTemplate";
import LikeButton from "./LikeButton";

export default function MagicalCreatures() {
  const creatures = Creaturelist.Creatures;

  return (
    <div>
      {creatures.map((creatures, index) => (
        <div className="Creaturestyle">
          <div key={index}>
            <CreatureTemplate
              name={creatures.name}
              description={creatures.description}
            />
            <strong>Awesomeness level {index + 1}</strong>
          </div>
          <LikeButton />
        </div>
      ))}
    </div>
  );
}
