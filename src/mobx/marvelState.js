import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { flow } from "mobx";
import axios from "axios";
import crypto from 'crypto';

//creating our store context
export const MarvelContext = createContext();

export const MarvelProvider = ({ children }) => {
  const marvelStore = useLocalObservable(() => ({
    characters: [],
    loading: true,
    searchCharacters: flow(function* searCharacters(tx) {
      const ts = Date.now();
      const privateKey = process.env.REACT_APP_PRIVATE_KEY;
      const publicKey = process.env.REACT_APP_PUBLIC_KEY;
      const hash = crypto.createHash("md5").update(`${ts}${privateKey}${publicKey}`).digest("hex");
        const {
          data: { data },
        } = yield axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${30}`,
          {
            params: tx && {
              nameStartsWith: tx,
            },
          }
        );

        const { results } = data;
        marvelStore.characters = results;
        marvelStore.loading = false;
    }),
  }));

  return (
    <MarvelContext.Provider value={marvelStore}>
      {children}
    </MarvelContext.Provider>
  );
};
