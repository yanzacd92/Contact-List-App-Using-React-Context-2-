import React, {useContext, useRef} from "react";
import { Context } from "../store/appContext";
import golden from "../../img/golden.jpg";

const resetForm = () => {
    fullname.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    address.current.value = "";
  }
//create your first component
const Modal = () => {
    const {actions} = useContext(Context)
    const fullname = useRef()
    const email = useRef()
    const phone = useRef()
    const address = useRef()
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
                    <form id="create-contact">
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="Full Name" ref={fullname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={email}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Enter phone" ref={phone}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter address" ref={address}/>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="save-button btn btn-primary" onClick={() => actions.addContact({ name: fullname.current.value, address: address.current.value, email: email.current.value, phone: phone.current.value, img: golden })}>Save</button>
                        <a className="back btn" data-bs-dismiss="modal" onClick={() => resetForm()}>or get back to contacts</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Modal;
