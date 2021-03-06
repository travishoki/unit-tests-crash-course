import { useState } from "react";

import { useQueryCharacters } from "./useQueryCharacters";

export const useList = () => {
  const initiList = useQueryCharacters();
  const [list, setList] = useState(initiList);

  const addToList = (item) => {
    setList([...list, item]);
  };

  const deleteFromList = (itemToDelete) => {
    const newList = list.filter((item) => item !== itemToDelete);
    setList(newList);
  };

  return {
    addToList,
    deleteFromList,
    list,
  };
};
