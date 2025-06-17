import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import { useState } from "preact/hooks";

type Props = {
  characters: Character[];
};

const houses = [
  "All",
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff",
];

type House = typeof houses[number];

const CharacterViewer: FunctionComponent<Props> = (props) => {
  const [filter, setFilter] = useState<House>("All");

  const characters = filter === "All"
    ? props.characters
    : props.characters.filter((ch) => ch.house === filter);

  return (
    <>
      <div>
        <label>Filter by house:</label>
        <select
          id="house-filter"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value as House)}
        >
          {houses.map((house) => (
            <option value={house} key={house}>
              {house}
            </option>
          ))}
        </select>
      </div>
      <div class="characterPane">
        {characters &&
          characters.map((ch) => <CharacterCard key={ch.id} character={ch} />)}
      </div>
    </>
  );
};

export default CharacterViewer;
