import axios from "axios";
import { Character } from "../types.ts";

const BASE_URL = "https://hp-api.onrender.com/api";

export const fetchAllCharacters = async (): Promise<Character[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/characters`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCharactersByHouse = async (
  house: string,
): Promise<Character[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/characters/house/${house}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCharacterByName = async (
  name: string,
): Promise<Character | null> => {
  try {
    const res = await axios.get(`${BASE_URL}/characters`);
    const characters: Character[] = res.data;
    return (
      characters.find(
        (c) => c.name.toLowerCase() === decodeURIComponent(name).toLowerCase(),
      ) ?? null
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
