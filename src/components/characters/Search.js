import React, { useState, useEffect, useContext } from 'react';
import { MarvelContext } from '../../mobx/marvelState';

export default function Search(props) {
	const { searchCharacters } = useContext(MarvelContext)
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	
	useEffect(
		() => {
		searchCharacters(text);
            // eslint-disable-next-line       
		}, [ text ] );
	return (
		<div>
			<input
				type="search"
				name="text"
				placeholder="search character"
				value={text}
				onChange={onChange}
				className="search-input"
			/>
		</div>
	);
}

