import { CharacterType } from "../Interfaces/Character";
import { Signal } from "../hooks/useFetch";





export const CharactersService = {
  getMany: async (signal: Signal) => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character",
      {
        signal,
      }
    );

    if (response.status < 200 || response.status >= 400) {
      return Promise.reject(new Error("Error"));
    }

    const characters = (await response.json());
    if (characters?.results) {
      return characters.results;
    } else {
      return []
    }
  },
  getOne: async ( id: CharacterType["id"]): Promise<CharacterType> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );

    if (response.status < 200 || response.status >= 400) {
      return Promise.reject(new Error("Error"));
    }

    return await response.json();
  },
};