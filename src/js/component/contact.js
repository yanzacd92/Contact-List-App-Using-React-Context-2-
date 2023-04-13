import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import propTypes from "prop-types";

//create your first component
const Contact = (props) => {
	return (
		<div className="card">
            <div className="content">
                <img src={props.img} className="image" alt={props.name} />
                <div className="info">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{props.address}</span>
                        </li>
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            <span>{props.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{props.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="actions">
                <button className="btn" onClick={() => props.onUpdate()}><FontAwesomeIcon className="actionIcons" icon={faPencil} /></button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon className="actionIcons" icon={faTrashCan} /></button>
            </div>
        </div>
	);
};


Contact.propTypes = {
    history: propTypes.object,
    onDelete: propTypes.func,
    onUpdate: propTypes.func,
    name: propTypes.string,
    address: propTypes.string,
    phone: propTypes.string,
    email: propTypes.string,
    img: propTypes.string
}
export default Contact;