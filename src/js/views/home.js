import React, {useContext, useState} from "react";
import Contact from "../component/contact";
import {Context} from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const {contacts} = store;
	return(
		<div className="text-center mt-5">
			<div className="list-group">
				{contacts.map( (contact, index) =>
					<Contact 
						key={index}
						name={contact.name} 
						address={contact.address} 
						email={contact.email}
						img={contact.img}
						onDelete={() => actions.delContact(index)}
						phone={contact.phone}
					/>
				)}
			</div>
		</div>
	)
};
