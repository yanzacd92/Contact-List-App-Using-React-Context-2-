import golden from "../../img/golden.jpg";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{ name: "Cristian Yanza", address: "Colombia", email: "cristian@example.com", phone: "(870) 288-4149", img: golden },
				{ name: "Cristian Yanza", address: "Colombia", email: "cristian@example.com", phone: "(870) 288-4149", img: golden }
			]
		},
		actions: {
			addContact: (contact) => {
				let store = getStore();
				let newContacts = [...store.contacts, contact]

				//reset the global store
				setStore({ contacts: newContacts });
			},

			delContact: (index) => {
				let newContacts = [...getStore().contacts]
				newContacts.splice(index, 1)

				//reset the global store
				setStore({ contacts: newContacts });
			},
			updateContact: (contact, index) => {
				let store = getStore();
				store.contacts[index] = contact;
				setStore({ contacts: store.contacts });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
