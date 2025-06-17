import { Signal } from "https://esm.sh/@preact/signals-core@1.8.0/dist/signals-core.d.ts";
import { Character } from "./types.ts";

export const characters = new Signal<Character[]>([]);
