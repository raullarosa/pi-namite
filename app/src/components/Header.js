import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { }
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">pi-namite</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="#stats">Stats</a></li>
						<li><a href="#history">History</a></li>
						<li><a href="#login">Login</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header