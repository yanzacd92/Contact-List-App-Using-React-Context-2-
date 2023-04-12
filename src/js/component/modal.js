import React from "react";
import Form from "./form";

//create your first component
const Modal = () => {
	return (
        <div className="container-modal">
            <div className="modal" tabIndex="-1" id="contactModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add a new contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Modal;
