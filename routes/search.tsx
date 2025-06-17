import { FunctionComponent } from "preact";
import SearchViewer from "../islands/SearchViewer.tsx";
import { PageProps } from "$fresh/server.ts";
import { Character } from "../types.ts";

const search: FunctionComponent<PageProps> = (props) => {
  const characters = props.state.characters as Character[] ?? [];
  return (
    <>
      <SearchViewer characters={characters} />
    </>
  );
};

export default search;
