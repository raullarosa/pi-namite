import React, { Component } from 'react'
import '../styles/Header.css'
import {Dropdown, Button, NavItem} from 'react-materialize'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { }
	}
    
    
	render() {
		return (
			<nav>
                    
            
            
				<div className="nav-wrapper">
					
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="#stats">Stats</a></li>
						<li><a href="#history">History</a></li>
						<li><a href="#login">Login</a></li>
					</ul>
                            <Dropdown trigger ={
                    <Button >Building</Button>
            }>
	               <NavItem>A</NavItem>
	               <NavItem>B</NavItem>
	               <NavItem>C</NavItem>
                </Dropdown>
            
					{/* <li><a href="#stats">Stats</a></li>
						<li><a href="#history">History</a></li>
						<li><a href="#login">Login</a></li>
                        <button onclick="myFunction()" class="dropbtn">Building</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#buildingA">A</a>
                                <a href="#buildingB">B</a>
                                <a href="#buildingC">C</a>
                                </div>*/ }
				</div>
			</nav>
            
		)
	}
}



export default Header