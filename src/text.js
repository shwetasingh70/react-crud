import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Front extends React.Component{
	logOut(e){
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}
	render(){
		const loginRegLink = (
			<ul clsssName="navbar-nav">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<link to="/register" className="nav-link">
						Register
					</link>
				</li>
			</ul>
		)
		const userLink = (
			<ul clsssName="navbar-nav">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<a href="" onClick="{this.logOut.bind(this)}" className="nav-link">
						Logout
					</a>
				</li>
			</ul>
		)

		return(
			<nav>
				{localStorage.usertoken ? userLink : loginRegLink}
			</nav>
		);
		
		
	}	
}
export default Front;