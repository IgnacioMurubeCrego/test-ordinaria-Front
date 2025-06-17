// routes/character/[name].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchCharacterByName } from "../../lib/api.ts";
import { Character } from "../../types.ts";

export const handler: Handlers<Character | null> = {
  async GET(_, ctx) {
    const character = await fetchCharacterByName(ctx.params.name);
    if (!character) return ctx.renderNotFound();
    return ctx.render(character);
  },
};

export default function CharacterPage({ data }: PageProps<Character>) {
  return (
    <div class="character-detail">
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} width="200" />
      <p>
        <strong>House:</strong> {data.house}
      </p>
      <p>
        <strong>Actor:</strong> {data.actor}
      </p>
      <p>
        <strong>Patronus:</strong> {data.patronus}
      </p>
    </div>
  );
}
