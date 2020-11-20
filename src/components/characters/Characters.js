import React from 'react';
import { useSelector } from 'react-redux';
import CharacterItem from './CharacterItem';
import Spinner from '../layout/Spinner';
import CharNotFound from '../layout/Alert';
import { createSelector } from '@reduxjs/toolkit';

const selectMarvelState = createSelector(
	(state) => state.marvel,
	({ loading, characters }) => ({ loading, characters })
);

const characterStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
	gridGap: '1rem'
};

const Users = () => {
	const { characters, loading } = useSelector(selectMarvelState);
	if (loading) return <Spinner />;

	return (
		<div style={characterStyle}>
			{characters.length === 0 && !loading ? (
				<CharNotFound />
			) : (
				characters.map((character) => <CharacterItem key={character.id} characterInfo={character} />)
			)}
		</div>
	);
};

export default Users;
