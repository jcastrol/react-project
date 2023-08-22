/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { CharacterType } from "../Interfaces/Character";
import { CharactersService } from "../services/CharactersService";


export const useCharactersFetch = () => {
  const [charactersState, fetchCharacters] = useFetch<CharacterType[]>();

  const handleFetchUsers = () => {
    fetchCharacters(CharactersService.getMany);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return [charactersState] as const;
};