import React from "react";

//create your first component
const Form = () => {
	return (
		<form>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Full Name" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter phone" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" required/>
            </div>
        </form>
	);
};

export default Form;