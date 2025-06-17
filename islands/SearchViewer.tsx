import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterViewer from "./CharacterViewer.tsx";

type Props = {
  characters: Character[];
};

const SearchViewer: FunctionComponent<Props> = (props) => {
  const [searchName, setSearchName] = useState<string>("");
  const characters = props.characters.filter((ch) =>
    ch.name.toLowerCase().startsWith(searchName.toLowerCase())
  );
  return (
    <>
      <div class="search">
        <div class="searchbarContainer">
          <input
            class="searchbar"
            type="text"
            placeholder="Search character"
            value={searchName}
            onInput={(e) => setSearchName(e.currentTarget.value)}
          />
        </div>
        <div class="characterPane">
          <CharacterViewer characters={characters} />
        </div>
      </div>
    </>
  );
};

export default SearchViewer;
