import React from "react";
import Contact from "../component/contact";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="list-group">
			<Contact />
			<Contact />
			<Contact />
			<Contact />
		</div>
	</div>
);
