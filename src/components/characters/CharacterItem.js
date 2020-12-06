import React from 'react';
import { Link } from 'react-router-dom'

const CharacterItem = ({ characterInfo }) => {
	const { thumbnail, name } = characterInfo;
	const { path, extension } = thumbnail;
	return (
		<div className="card text-center contain">
			<img src={`${path}.${extension}`} className="image" alt="" style={{ height: '300px' }} />
			<div className="middle">
				<Link to={{pathname:`characters/${name}`, state : {characterInfo}}}><button className="btn btn-char">{name}</button></Link>
			</div>
		</div>
	);
};

export default CharacterItem;
