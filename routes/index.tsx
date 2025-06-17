import { PageProps } from "$fresh/server.ts";
import CharacterViewer from "../islands/CharacterViewer.tsx";
import { Character } from "../types.ts";

const Home = (props: PageProps) => {
  const characters = props.state.characters as Character[] ?? [];
  return (
    <>
      <CharacterViewer characters={characters} />
    </>
  );
};

export default Home;
