import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './ui/Tabs';
import StudentForm from './ui/StudentForm';

const selectStyle = {
    width: "20%"
}


const findMother = (mother_id, parentArray) => {
    for (let i = 0; i < parentArray.length; i++) {
        if (parentArray[i].id === mother_id) {
            return parentArray[i];
        }
    }
    return [];
}

const findFather = (father_id, parentArray) => {
    for (let i = 0; i < parentArray.length; i++) {
        if (parentArray[i].family_id === father_id) {
            return parentArray[i];
        }
    }
    return [];
}

// const findStudentDetails = (id, student_teacher_arr) => {
//     console.log(id, student_teacher_arr);
//     for (let i = 0; i < student_teacher_arr.length; i++) {
//         if (id === student_teacher_arr[i].student_id) {
//             return student_teacher_arr[i];
//         }
//     }
//     return [];
// }

const getStudentGrades = (student) => {
    if (!Object.keys(student.grades)) return null;
    return (
        <tbody>
            <tr>
                <td>MATH</td>
                <td>{student.grades.q1.MATH}</td>
                <td>{student.grades.q2.MATH}</td>
                <td>{student.grades.q3.MATH}</td>
                <td>{student.grades.q4.MATH}</td>
            </tr>
            <tr>
                <td>LANG</td>
                <td>{student.grades.q1.LANG}</td>
                <td>{student.grades.q2.LANG}</td>
                <td>{student.grades.q3.LANG}</td>
                <td>{student.grades.q4.LANG}</td>
            </tr>
            <tr>
                <td>READ</td>
                <td>{student.grades.q1.READ}</td>
                <td>{student.grades.q2.READ}</td>
                <td>{student.grades.q3.READ}</td>
                <td>{student.grades.q4.READ}</td>
            </tr>
            <tr>
                <td>HIST</td>
                <td>{student.grades.q1.HIST}</td>
                <td>{student.grades.q2.HIST}</td>
                <td>{student.grades.q3.HIST}</td>
                <td>{student.grades.q4.HIST}</td>
            </tr>
            <tr>
                <td>SCI</td>
                <td>{student.grades.q1.SCI}</td>
                <td>{student.grades.q2.SCI}</td>
                <td>{student.grades.q3.SCI}</td>
                <td>{student.grades.q4.SCI}</td>
            </tr>
        </tbody>)
}



const findTeacher = (teacher_id, teachers) => {
    for (let i = 0; i < teachers.length; i++) {
        if (teacher_id === teachers[i].id) {
            return teachers[i];
        }
    }
    return 0;
}


// Finish this. This will be to import the form component when one of the buttons are clicked
// const ActionClick = () => {
//     const handleClick = (e) => {
//         e.preventDefault();
//         return;
//     }

// }


const Student = (props) => {
    const [student, setStudent] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [mother, setMother] = useState(null);
    const [father, setFather] = useState(null);
    console.log(props);
    // 
    useEffect(() => {
        const _student = props.fetchStudent(props.match.params.id)
        // const student_teacher = props.fetchStudentTeacher();
        // console.log(student_teacher);
        const parents = props.fetchParents();
        const teachers = props.fetchTeachers();
        // const student_details = findStudentDetails(_student.id, student_teacher);
        setTeacher(findTeacher(_student.teacher_id, teachers));
        setFather(findFather(_student.father_id, parents));
        setMother(findMother(_student.mother_id, parents));
        console.log(_student);
        // console.log(student_details);
        // setStudent({ ..._student, grades: { ...student_details.grades } })
        setStudent({ ..._student });
    }, [props.match.params.id])
    if (!student) return <div>Loading...</div>
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Student Name: {student.first_name + " " + student.last_name}</h2>
                        <h1><i className="fa fa-user"></i></h1>
                    </div>
                    <div className="col-md">

                        <p><span>Student ID: </span>{student.id}</p>
                        <p><span>Grade: </span>{student.grade}</p>
                        <p><span>Age: </span>{student.age}</p>
                        <p><span>Gender: </span>{student.gender}</p>
                        <p><span>Teacher: </span>{teacher.first_name}  <Link to={`/teacher/${teacher.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>
                        <p><span>Absences: </span>4</p>
                        <p><span>Address: </span>{student.address}</p>
                        <p><span>Mother: </span>{mother.first_name} <Link to={`/parent/${parent.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>
                        <p><span>Father: </span>{father.first_name} <Link to={`/parent/${parent.id}`}>
                            <button type="button" className="btn btn-info btn-sm">Info</button>
                        </Link></p>
                        <p><span>GPA: </span>3.2</p>


                    </div>

                </div>
                <Tabs history={props.history}>
                    <Tabs.List allTabsActive={true}>
                        <Tabs.Tab>Grades</Tabs.Tab>
                        <Tabs.Tab>Attendance</Tabs.Tab>
                        <Tabs.Tab>Emergency</Tabs.Tab>
                        <Tabs.Tab>Siblings</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Content>
                        <Tabs.Panel>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Q1</th>
                                        <th>Q2</th>
                                        <th>Q3</th>
                                        <th>Q4</th>
                                    </tr>
                                </thead>

                                {getStudentGrades(student)}

                            </table>
                        </Tabs.Panel>
                        <Tabs.Panel>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Quarter</th>
                                        <th>Date</th>
                                        <th>Marking</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>1/27/2020</td>
                                        <td>P</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>1/28/2020</td>
                                        <td>T</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>1/29/2020</td>
                                        <td>A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tabs.Panel>
                        <Tabs.Panel>
                            <div className="row">
                                <div className="col">
                                    <p><span>Mother: {mother.first_name + " " + mother.last_name + " "}</span></p>
                                    <p><span>Mother's Phone Number: {mother.phone_number}</span></p>
                                </div>
                                <div className="col">
                                    <p><span>Father: {father.first_name + " " + father.last_name + " "}</span></p>
                                    <p><span>Father's Phone Number: {father.phone_number}</span></p>
                                </div>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel><StudentForm /></Tabs.Panel>
                    </Tabs.Content>
                </Tabs>

            </div>
        </Fragment>
    )
}

export default Student;