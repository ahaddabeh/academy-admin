import React, { useRef, Fragment } from 'react';








const TeacherForm = (props) => {
    // Gives us a reference to that element. Ref is a static state
    const fnRef = useRef();
    const lnRef = useRef();
    const phoRef = useRef();
    const genRef = useRef();
    const addrRef = useRef();
    const graRef = useRef();


    const handleSubmit = () => {

        const teacher = {
            firstName: fnRef.current.value,
            lastName: lnRef.current.value,
            gender: genRef.current.value,
            address: addrRef.current.value,
            grade: graRef.current.value,
            phone: phoRef.current.value
        }

        props.saveTeacher(teacher);

    }

    const resetForm = () => {
        fnRef.current.value = "";
        lnRef.current.value = "";
        graRef.current.value = "";
        genRef.current.value = "";
        addrRef.current.value = "";
        phoRef.current.value = "";
    }

    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <br />
                <input type="text" ref={fnRef} id="firstName" name="firstName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <br />
                <input type="text" ref={lnRef} id="lastName" name="lastName" />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender: </label>
                <br />
                <input type="text" ref={genRef} id="gender" name="gender" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address: </label>
                <br />
                <input type="text" ref={addrRef} id="address" name="address" />
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade: </label>
                <br />
                <input type="text" ref={graRef} id="grade" name="grade" />
            </div>
            <div className="form-group">
                <label htmlFor="phone_number">Phone Number: </label>
                <br />
                <input type="text" ref={phoRef} id="phone_number" name="phone_number" />
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


export default TeacherForm;