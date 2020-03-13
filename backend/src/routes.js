import Home from './components/Home'
import Students from './components/Students'
import Teachers from './components/Teachers'
import Parents from './components/Parents'
import Student from './components/Student'
import {
    fetchStudents,
    fetchStudent,
    fetchTeachers,
    fetchParents
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
        fetchStudent: (id) => fetchStudent(id)
    },
];

export default routes;