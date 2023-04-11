import React from "react";
import Form from "./form.jsx";

//create your first component
const Modal = () => {
	return (
        <div className="container-modal">
            <button type="button" class="addContact btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
                Add new Contact
            </button>
            <div className="modal" tabindex="-1" id="contactModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add a new contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="save-button btn btn-primary">Save</button>
                        <a className="back btn" data-bs-dismiss="modal">or get back to contacts</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Modal;
