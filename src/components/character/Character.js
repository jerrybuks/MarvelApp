import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
	const { location: { state: { characterInfo } } } = props;
	console.log(characterInfo);
	const { name, description, comics,  events, series , stories , thumbnail } = characterInfo;
	const { path, extension } = thumbnail;
	
	return (
		<div>
			<div>
				<Link to="/">
					<button className="btn">
						<span style={{ fontSize: '15px', padding: '2px' }}>&#171;</span>Go back to search
					</button>
				</Link>
			</div>
			<div className="characterBody">
				<div >
					<img
						src={`${path}.${extension}`}
						className="image"
						alt=""
						style={{ height: '300px', width: '300px' }}
					/>
					<div style={{textAlign: 'center'}}><strong>{name}</strong></div>
				</div>
				<div className="characterBody-more">
					<div style={{ paddingBottom: '40px'}}>
						<strong>Description: </strong>
						{description ? description : 'nil' }
					</div>
					<div><strong>ComicsAvailable: </strong>{comics.available}</div>
					<div><strong>Events Availble: </strong>{events.available}</div>
					<div><strong>Storeis Availble: </strong>{stories.available}</div>
					<div><strong>Series Available: </strong>{series.available}</div>
				</div>
			</div>
		</div>
	);
};
export default Character;
