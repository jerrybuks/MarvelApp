import React, { useState, useEffect, useContext } from 'react';
import MarvelContext from '../../context/marvel/marvelContext'


export default function Search(props) {
	const marvelContext = useContext(MarvelContext)
	console.log(marvelContext.characters)
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		console.log('am changing')
		setText(e.target.value);
	};
	
	useEffect(
		() => {
			console.log(text,'here bro')
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

