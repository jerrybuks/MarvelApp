import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Characters from './components/characters/Characters';
import Search from './components/characters/Search';
import About from './components/pages/About';
import Character from './components/character/Character';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search {...props}/>
										<Characters {...props}/>
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/characters/:name" render={(props) => <Character {...props} />} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
