import React, {useContext, useRef} from "react";
import { Context } from "../store/appContext";
import golden from "../../img/golden.jpg";

//create your first component
const Form = () => {
    const {actions} = useContext(Context)
    const fullname = useRef()
    const email = useRef()
    const phone = useRef()
    const address = useRef()
	return (
        <div>
            <form>
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
            <div className="modal-footer">
                <button type="button" className="save-button btn btn-primary" onClick={() => actions.addContact({ name: fullname.current.value, address: address.current.value, email: email.current.value, phone: phone.current.value, img: golden })}>Save</button>
                <a className="back btn" data-bs-dismiss="modal">or get back to contacts</a>
            </div>
        </div>
	);
};

export default Form;