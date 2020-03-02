import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		welcome: null
	}

	componentDidMount();

	render() {
		return (
		<div>
			{this.state.welcome
				? <div>{this.state.welcome}</div> : null
			}
		</div>
		);
	}
}

export default App;
