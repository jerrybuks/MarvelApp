import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersStart } from '../../redux/marvel/marvel.slice';


export default function Search(props) {
	const dispatch = useDispatch()
	
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	
	useEffect(
		() => {
		dispatch(getCharactersStart(text))
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

