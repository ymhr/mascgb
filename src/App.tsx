import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';
import Header from 'shared/Header';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/" component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
