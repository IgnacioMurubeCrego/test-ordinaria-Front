import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../types.ts";

export const handler: MiddlewareHandler = async (
  _req: Request,
  ctx: FreshContext,
) => {
  try {
    const result = await axios.get<Character[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    ctx.state.characters = result.data;
  } catch (_e) {
    ctx.state.characters = [];
  }
  return await ctx.next();
};
