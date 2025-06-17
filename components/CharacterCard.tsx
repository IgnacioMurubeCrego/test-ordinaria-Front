import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

type Props = {
  character: Character;
};

const CharacterCard: FunctionComponent<Props> = (props) => {
  const character = props.character;
  return (
    <>
      <div class="characterCard">
        <h1 href={`/characters/${character.id}`}>{character.name}</h1>
        <br />
        <img  src={character.image}></img>
        <br />
        <h2>{character.house}</h2>
      </div>
    </>
  );
};

export default CharacterCard;
