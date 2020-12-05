import React, { useState, useEffect, useContext } from 'react';

export default function Search(props) {
	
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	
	useEffect(
		() => {
		//searchCharacters(text);
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

