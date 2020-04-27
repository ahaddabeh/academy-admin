import React, { useRef, Fragment } from 'react';








const ParentForm = (props) => {
    // Gives us a reference to that element. Ref is a static state
    const fnRef = useRef();
    const lnRef = useRef();
    const phoRef = useRef();
    const genRef = useRef();
    const addrRef = useRef();
    const emaRef = useRef();

    const handleSubmit = () => {


        console.log(fnRef.current.value);
        console.log(lnRef.current.value);
        console.log(phoRef.current.value);
        console.log(genRef.current.value);
        console.log(addrRef.current.value);
        console.log(emaRef.current.value);
        fnRef.current.value = "";
    }

    const resetForm = () => {

    }

    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <br />
                <input ref={fnRef} id="first_name" name="first_name" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <br />
                <input ref={lnRef} id="last_name" name="last_name" />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <br />
                <input ref={genRef} id="gender" name="gender" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <br />
                <input ref={addrRef} id="address" name="address" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <br />
                <input ref={emaRef} id="email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="phone_number">Phone Number:</label>
                <br />
                <input ref={phoRef} id="phone_number" name="phone_number" />
            </div>
            <div>
                <div className="row">
                    <button type="button" className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleSubmit}>Clear</button>
                </div>
            </div>
        </Fragment>
    )
}


export default ParentForm;