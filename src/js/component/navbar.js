import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import golden from "../../img/golden.jpg";

export const Navbar = () => {
	const {actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary" onClick={() => actions.addContact({ name: "Cristian Yanza", address: "Colombia", email: "cristian@example.com", phone: "(870) 288-4149", img: golden })}>Add new contact</button>
			</div>
		</nav>
	);
};
