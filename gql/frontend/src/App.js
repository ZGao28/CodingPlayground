import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


async function loadGreeting() {
	let response = await fetch('http://localhost:9000/graphql', {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({query: '{ hello }'})
	});
	let body = await response.json();
	return body.data.hello;
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayText: 'Loading'
		}
	}
	componentDidMount() {
		loadGreeting().then((ret)=>{this.setState({displayText: ret});}).catch((err)=>{console.log(err)});
	}
	render() {
	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				{this.state.displayText}
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn Reaccs
			</a>
		</header>
		</div>
	);
	}
}

export default App;
