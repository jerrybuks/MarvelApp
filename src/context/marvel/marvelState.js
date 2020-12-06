import React, { useReducer } from "react";
import axios from "axios";
import crypto from "crypto";
import MarvelContext from "./marvelContext";
import MarvelReducer from "./marvelReducer";
import { SEARCH_CHARACTERS, SET_LOADING } from "../types";

//steps to setting u[p our app stae using context and reducer hook]
/**
 * create/initialize the store/context
 * setuop up the types (i.e types of possible actions)
 * create your initialState
 * In the fuction where you created an initialState , also add all your actions, when you call an action it willl make a request, get a response, then we dispach a type back to our reducer 
 * The reducer is a pure function that takes the current state and an action, and returns the next state. Note that the state is accumulated as each action on the collection is applied to change this state.

 */

const MarvelState = (props) => {
  const initialState = {
    characters: [],
    character: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MarvelReducer, initialState);
  // Search_Charcters
  const searchCharacters = async (tx) => {
    setLoading();
    const ts = Date.now();
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const hash = crypto
      .createHash("md5")
      .update(`${ts}${privateKey}${publicKey}`)
      .digest("hex");

    const {
      data: { data },
    } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${30}`,
      {
        params: tx && {
          nameStartsWith: tx,
        },
      }
    );

    const { results } = data;
    dispatch({
      type: SEARCH_CHARACTERS,
      payload: results,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MarvelContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        loading: state.loading,
        searchCharacters,
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};

export default MarvelState;
