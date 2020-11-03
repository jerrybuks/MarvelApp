import React, { useState, useEffect, useContext } from 'react';
import MarvelContext from '../../context/marvel/marvelContext'


export default function Search(props) {
	const marvelContext = useContext(MarvelContext)

	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	
	useEffect(
		() => {
		marvelContext.searchCharacters(text);
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

