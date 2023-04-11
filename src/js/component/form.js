import React from "react";

//create your first component
const Form = () => {
	return (
		<form>
            <div className="mb-3">
                <label for="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter address"/>
            </div>
        </form>
	);
};

export default Form;