import React from "react";
import propTypes from "prop-types";

//create your first component
const ConfirmationModal = (props) => {
	return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>if you delete this contact, you will not be able to see their data again </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.onDelete()}>Confirm</button>
                </div>
                </div>
            </div>
        </div>
	);
};

ConfirmationModal.propTypes = {
    onDelete: propTypes.func
}

export default ConfirmationModal;