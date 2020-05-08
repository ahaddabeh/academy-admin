import React, { useRef, Fragment } from 'react';







const StudentForm = (props) => {
    // Gives us a reference to that element. Ref is a static state
    const fnRef = useRef();
    const lnRef = useRef();
    const graRef = useRef();
    const genRef = useRef();
    const addrRef = useRef();
    const ageRef = useRef();
    const handleSubmit = () => {


        console.log(fnRef.current.value);
        console.log(fnRef.current.value);
        console.log(fnRef.current.value);
        console.log(fnRef.current.value);
        console.log(fnRef.current.value);
        console.log(fnRef.current.value);
        fnRef.current.value = "";
        lnRef.current.value = "";
        graRef.current.value = "";
        genRef.current.value = "";
        addrRef.current.value = "";
        ageRef.current.value = "";
    }

    const resetForm = () => {
        fnRef.current.value = "";
        lnRef.current.value = "";
        graRef.current.value = "";
        genRef.current.value = "";
        addrRef.current.value = "";
        ageRef.current.value = "";
    }

    return (
        <Fragment>

            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <br />
                <input ref={fnRef} id="firstName" name="firstName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <br />
                <input ref={lnRef} id="lastName" name="lastName" />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <br />
                <input ref={ageRef} id="age" name="age" />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <br />
                <input ref={genRef} id="gender" name="gender" />
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <br />
                <input ref={graRef} id="grade" name="grade" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <br />
                <input ref={addrRef} id="address" name="address" />
            </div>

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger btn-sm" onClick={resetForm}>Clear</button>
                </div>
            </div>
        </Fragment>
    )
}


export default StudentForm;