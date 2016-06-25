import React from 'react';
import {render} from 'react-dom';

let parentStyle = {
	height: '100vh',
	background: 'url(images/background.jpg) no-repeat center center fixed',
	WebkitBackgroundSize: 'cover',
	MozBackgroundSize: 'cover',
	OBackgroundSize: 'cover',
	backgroundSize: 'cover'
};

let messageStyle = {
	margin: '20 auto',
	position: 'relative',
	top: '50%',
	transform: 'translateY(-50%)',
	textAlign: 'center',
	backgroundColor: 'rgba(255,255,255,0.7)',
	fontFamily: '"Roboto", sans-serif'
};

let App = React.createClass({
	render() {
		return (
			<div className="container-fluid" style={parentStyle}>
				<div className="container jumbotron" style={messageStyle}>
					<h1><span className="fa fa-cog fa-spin"></span> Site Under Construction</h1>
				</div>
			</div>
		);
	}
});

render(<App/>, document.getElementById('main-content'));