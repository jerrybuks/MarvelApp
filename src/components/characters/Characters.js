import React, { Fragment, useContext } from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../layout/Spinner";
import CharNotFound from "../layout/Alert";
import { MarvelContext } from "../../mobx/marvelState";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";


const characterStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
};

const Users = observer(() => {
  const { characters, loading, numOfCharacters } = useContext(MarvelContext);
  return (
    <div >
      {loading ? (
        <Spinner />
      ) : characters.length === 0 ? (
        <CharNotFound />
      ) : (
        <Fragment>
      <div>numof charcaters : {numOfCharacters}</div>
      <div style={characterStyle}>
      { characters.map((character) => (
          <CharacterItem key={character.id} characterInfo={toJS(character)} />
        ))}
      </div>
        </Fragment>
      )}
      
    </div>
  );
});

export default Users;
