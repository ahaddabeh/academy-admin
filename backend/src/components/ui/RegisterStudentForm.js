import React, { useRef, Fragment } from 'react';
import Tabs from '../ui/Tabs';
import ParentForm from '../ui/ParentForm'







const RegisterStudentForm = (props) => {
    // Gives us a reference to that element. Ref is a static state
    const fnRef = useRef();
    const lnRef = useRef();
    const graRef = useRef();
    const genRef = useRef();
    const addrRef = useRef();
    const ageRef = useRef();

    // mother refs

    const m_fnRef = useRef();
    const m_lnRef = useRef();
    const m_phoRef = useRef();
    const m_genRef = useRef();
    const m_addrRef = useRef();
    const m_emaRef = useRef();

    // father refs
    const f_fnRef = useRef();
    const f_lnRef = useRef();
    const f_phoRef = useRef();
    const f_genRef = useRef();
    const f_addrRef = useRef();
    const f_emaRef = useRef();
    const handleSubmit = () => {

        const data = {
            student: {
                firstName: fnRef.current.value,
                lastName: lnRef.current.value,
                grade: graRef.current.value,
                gender: genRef.current.value,
                address: addrRef.current.value,
                age: ageRef.current.value
            },
            mother: {
                firstName: m_fnRef.current.value,
                lastName: m_lnRef.current.value,
                phone: m_phoRef.current.value,
                gender: m_genRef.current.value,
                address: m_addrRef.current.value,
                email: m_emaRef.current.value
            },
            father: {
                firstName: f_fnRef.current.value,
                lastName: f_lnRef.current.value,
                phone: f_phoRef.current.value,
                gender: f_genRef.current.value,
                address: f_addrRef.current.value,
                email: f_emaRef.current.value
            }
        }

        props.saveStudent(data);
        console.log(data.student);
        console.log(data.mother);
        console.log(data.father);


        // fnRef.current.value = "";
        // lnRef.current.value = "";
        // graRef.current.value = "";
        // genRef.current.value = "";
        // addrRef.current.value = "";
        // ageRef.current.value = "";
        // f_fnRef.current.value = "";
        // f_lnRef.current.value = "";
        // f_phoRef.current.value = "";
        // f_genRef.current.value = "";
        // f_addrRef.current.value = "";
        // f_emaRef.current.value = "";
        // m_fnRef.current.value = "";
        // m_lnRef.current.value = "";
        // m_phoRef.current.value = "";
        // m_genRef.current.value = "";
        // m_addrRef.current.value = "";
        // m_emaRef.current.value = "";

    }

    const resetForm = () => {
        fnRef.current.value = "";
        lnRef.current.value = "";
        graRef.current.value = "";
        genRef.current.value = "";
        addrRef.current.value = "";
        ageRef.current.value = "";
        f_fnRef.current.value = "";
        f_lnRef.current.value = "";
        f_phoRef.current.value = "";
        f_genRef.current.value = "";
        f_addrRef.current.value = "";
        f_emaRef.current.value = "";
        m_fnRef.current.value = "";
        m_lnRef.current.value = "";
        m_phoRef.current.value = "";
        m_genRef.current.value = "";
        m_addrRef.current.value = "";
        m_emaRef.current.value = "";
    }

    return (
        <Fragment>
            <Tabs history={props.history}>
                <Tabs.List allTabsActive={true}>
                    <Tabs.Tab>Student Form</Tabs.Tab>
                    <Tabs.Tab>Mother Form</Tabs.Tab>
                    <Tabs.Tab>Father Form</Tabs.Tab>
                </Tabs.List>
                <Tabs.Content>
                    <Tabs.Panel>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="firstName">First Name:</label>
                                <br />
                                <input ref={fnRef} id="firstName" name="firstName" />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName">Last Name:</label>
                                <br />
                                <input ref={lnRef} id="lastName" name="lastName" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="age">Age:</label>
                                <br />
                                <input ref={ageRef} id="age" name="age" />
                            </div>
                            <div className="col">
                                <label htmlFor="gender">Gender:</label>
                                <br />
                                <input ref={genRef} id="gender" name="gender" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="grade">Grade:</label>
                                <br />
                                <input ref={graRef} id="grade" name="grade" />
                            </div>
                            <div className="col">
                                <label htmlFor="address">Address:</label>
                                <br />
                                <input ref={addrRef} id="address" name="address" />
                            </div>
                        </div>
                        <br />
                    </Tabs.Panel>
                    <Tabs.Panel>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="m_firstName">First Name:</label>
                                <br />
                                <input ref={m_fnRef} id="m_firstName" name="m_firstName" />
                            </div>
                            <div className="col">
                                <label htmlFor="m_lastName">Last Name:</label>
                                <br />
                                <input ref={m_lnRef} id="m_lastName" name="m_lastName" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="m_gender">Gender:</label>
                                <br />
                                <input ref={m_genRef} id="m_gender" name="m_gender" />
                            </div>
                            <div className="col">
                                <label htmlFor="m_address">Address:</label>
                                <br />
                                <input ref={m_addrRef} id="m_address" name="m_address" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="m_email">Email Address:</label>
                                <br />
                                <input ref={m_emaRef} id="m_email" name="m_email" />
                            </div>
                            <div className="col">
                                <label htmlFor="m_phone_number">Phone Number:</label>
                                <br />
                                <input ref={m_phoRef} id="m_phone_number" name="m_phone_number" />
                            </div>
                        </div>
                        <br />
                    </Tabs.Panel>
                    <Tabs.Panel>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="f_firstName">First Name:</label>
                                <br />
                                <input ref={f_fnRef} id="f_firstName" name="f_firstName" />
                            </div>
                            <div className="col">
                                <label htmlFor="f_lastName">Last Name:</label>
                                <br />
                                <input ref={f_lnRef} id="f_lastName" name="f_lastName" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="f_gender">Gender:</label>
                                <br />
                                <input ref={f_genRef} id="f_gender" name="f_gender" />
                            </div>
                            <div className="col">
                                <label htmlFor="f_address">Address:</label>
                                <br />
                                <input ref={f_addrRef} id="f_address" name="f_address" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="f_email">Email Address:</label>
                                <br />
                                <input ref={f_emaRef} id="f_email" name="f_email" />
                            </div>
                            <div className="col">
                                <label htmlFor="f_phone_number">Phone Number:</label>
                                <br />
                                <input ref={f_phoRef} id="f_phone_number" name="f_phone_number" />
                            </div>
                        </div>
                        <br />
                    </Tabs.Panel>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-danger btn-sm" onClick={resetForm}>Clear</button>
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs>

        </Fragment>
    )
}


export default RegisterStudentForm;