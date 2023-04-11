import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import golden from "../../img/golden.jpg";

export const Navbar = () => {
	const {actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<button className="add-contact btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">Add new contact</button>
			</div>
		</nav>
	);
};