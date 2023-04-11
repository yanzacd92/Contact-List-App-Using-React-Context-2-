import React, {useContext, useState} from "react";
import Contact from "../component/contact";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import rigo from "../../img/rigo-baby.jpg";

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
						onUpdate={() => actions.updateContact({name: "Daniel Velasco", address: "Popayan", email: "daniel@example.com", phone: "(770) 277-7179", img: rigo}, index)}
						phone={contact.phone}
					/>
				)}
			</div>
		</div>
	)
};
