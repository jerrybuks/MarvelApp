import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Characters from './components/characters/Characters';
import Search from './components/characters/Search';
import About from './components/pages/About'
import Character from './components/character/Character'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MarvelState from './context/marvel/marvelState'

 const App = () => {

	return (
		<MarvelState>
			<Router>	
			<div className="App">
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact  path="/" render={props => (
							<Fragment>
								<Search />
								<Characters />	
							</Fragment>
						)} />
						<Route exact path='/about' component={About} />
						<Route exact path="/characters/:name" render={props => (
						<Character {...props} />
						)}	/>
					</Switch>
				</div>
			</div>
		</Router>
		</MarvelState>
	)
}

export default App;
 