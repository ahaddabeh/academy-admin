import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './ui/Tabs';
import StudentForm from './ui/StudentForm';

const selectStyle = {
    width: "20%"
}

const getStudentGrades = (student) => {
    const cols = ["MATH", "LANG", "ENG", "SCI", "HIST"];
    const rows = ["q1", "q2", "q3", "q4"];
    const buildRow = (quarter) => {
        return (
            <tr>{cols.map(col => <td>{quarter && quarter[col] || "N/A"}</td>)}</tr>
        )
    }
    return (

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>MATH</th>
                    <th>LANG</th>
                    <th>HIST</th>
                    <th>SCI</th>
                    <th>ENG</th>
                </tr>
            </thead>

            <tbody>
                {rows.map(row => buildRow(student.grades && student.grades[row]))}
            </tbody>
        </table>
    )
}










const Student = (props) => {
    const [student, setStudent] = useState({});
    const [teacher, setTeacher] = useState({});
    const [mother, setMother] = useState({});
    const [father, setFather] = useState({});
    console.log(props);
    const updateStudent = async () => {
        const _student = await props.fetchStudent(props.match.params.id);
        console.log(_student)
        setStudent(_student.data);
        setTeacher(_student.data.teacher);
        // setMother(_student.data.mother);
        // setFather(_student.data.father);
        _student.data.Parents.forEach((p) => {
            if (p.gender === "Male") {
                setFather(p)
            }
            if (p.gender === "Female") {
                setMother(p)
            }

        })
        console.log(_student);
    }
    useEffect(() => {
        updateStudent();
        // const student_teacher = props.fetchStudentTeacher();
        // console.log(student_teacher);
        // const parents = props.fetchParents();
        // const teachers = props.fetchTeachers();
        // const student_details = findStudentDetails(_student.id, student_teacher);
        // setTeacher(findTeacher(_student.teacherId, teachers));
        // setFather(findFather(_student.fatherId, parents));
        // setMother(findMother(_student.motherId, parents));
        // console.log(_student);
        // console.log(student_details);
        // setStudent({ ..._student, grades: { ...student_details.grades } })
        // setStudent({ ..._student });
    }, [props.match.params.id])
    if (!student) return <div>Loading...</div>
    // return null;
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Student Name: {student.firstName + " " + student.lastName}</h2>
                        <h1><i className="fa fa-user"></i></h1>
                    </div>
                    <div className="col-md">

                        <p><span>Student ID: </span>{student.id}</p>
                        <p><span>Grade: </span>{student.grade}</p>
                        <p><span>Age: </span>{student.age}</p>
                        <p><span>Gender: </span>{student.gender}</p>
                        <p><span>Teacher: </span>{teacher.firstName}  <Link to={`/teacher/${teacher.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>

                        <p><span>Address: </span>{student.address}</p>
                        <p><span>Mother: </span>{mother.firstName + " " + mother.lastName} <Link to={`/parent/${mother.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>
                        <p><span>Father: </span>{father.firstName + " " + father.lastName} <Link to={`/parent/${father.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>



                    </div>

                </div>

                <Tabs history={props.history}>
                    <Tabs.List allTabsActive={true}>
                        <Tabs.Tab>Grades</Tabs.Tab>
                        <Tabs.Tab>Emergency</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Content>
                        <Tabs.Panel>
                            {getStudentGrades(student)}
                        </Tabs.Panel>

                        <Tabs.Panel>
                            <div className="row">
                                <div className="col">
                                    <p><span>Mother: {mother.firstName + " " + mother.lastName + " "}</span></p>
                                    <p><span>Mother's Phone Number: {mother.phone}</span></p>
                                </div>
                                <div className="col">
                                    <p><span>Father: {father.firstName + " " + father.lastName + " "}</span></p>
                                    <p><span>Father's Phone Number: {father.phone}</span></p>
                                </div>
                            </div>
                        </Tabs.Panel>

                    </Tabs.Content>
                </Tabs>

            </div>
        </Fragment>
    )
}

export default Student;