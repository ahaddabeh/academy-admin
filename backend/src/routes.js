import Home from './components/Home'
import Students from './components/Students'
import Teachers from './components/Teachers'
import Parents from './components/Parents'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Parent from './components/Parent'
import {
    fetchStudents,
    fetchStudent,
    fetchTeachers,
    fetchParents,
    fetchStudentTeacher,
    fetchParent,
    fetchTeacher
} from './api'
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        navlabel: "Home",
        navorder: 0,
    },
    {
        path: '/students',
        exact: true,
        component: Students,
        navlabel: "Students",
        navorder: 2,
        fetchStudents: () => fetchStudents()
    },
    {
        path: '/teachers',
        exact: true,
        component: Teachers,
        navlabel: "Teachers",
        navorder: 1,
        fetchTeachers: () => fetchTeachers()
    },
    {
        path: '/parents',
        exact: true,
        component: Parents,
        navlabel: "Parents",
        navorder: 3,
        fetchParents: () => fetchParents()
    },
    {
        path: '/student/:id',
        exact: true,
        component: Student,
        fetchStudent: (id) => fetchStudent(id),
        fetchStudentTeacher: () => fetchStudentTeacher(),
        fetchTeachers: () => fetchTeachers()
    },
    {
        path: '/teacher/:id',
        exact: true,
        component: Teacher,
        fetchTeacher: (id) => fetchTeacher(id)
    },
    {
        path: '/parent/:id',
        exact: true,
        component: Parent,
        fetchParent: (id) => fetchParent(id)
    }
];

export default routes;