import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from '../layout/Spinner'
import CharNotFound from '../layout/Alert';


const characterStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '1rem'
}

const Users = () => {
    if (loading) return <Spinner />

    return (
        <div style={characterStyle}>
                {(characters.length === 0) && !loading ? <CharNotFound /> :characters.map(character => <CharacterItem key={character.id}  characterInfo={character} />)}
        </div>
    )
}

export default Users

