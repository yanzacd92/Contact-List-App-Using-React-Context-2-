import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import golden from "../../img/golden.jpg";

//create your first component
const Contact = () => {
	return (
		<div className="card">
            <img src={golden} className="image" alt="..." />
            <div className="info">
                <div className="card-body">
                    <h5 className="card-title">Mike Anamendolla</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>5842 Hillcrest Rd</span>
                    </li>
                    <li className="list-group-item">
                        <FontAwesomeIcon icon={faPhoneFlip} />
                        <span>(870) 288-4149</span>
                    </li>
                    <li className="list-group-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>mike.ana@example.com</span>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <a href="#" className="card-link"><FontAwesomeIcon icon={faPencil} /></a>
                <a href="#" className="card-link"><FontAwesomeIcon icon={faTrashCan} /></a>
            </div>
        </div>
	);
};

export default Contact;