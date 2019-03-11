import React, { Component } from 'react';
import logo from './logo.svg';
import { Document, Page } from 'react-pdf';
import './App.css';

class App extends Component {
	state = {
		numPages: null,
		pageNumber: 1
	};

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	render() {
		const { pageNumber, numPages } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<div>
					<Document file="some.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
						<Page pageNumber={pageNumber} />
					</Document>
					<p>
						Page {pageNumber} of {numPages}
					</p>
				</div>
			</div>
		);
	}
}

export default App;
