import Home from './components/Home'
import Students from './components/Students'
import Teachers from './components/Teachers'
import Parents from './components/Parents'
import { fetchStudents } from './api'
import { fetchTeachers } from './api'
import { fetchParents } from './api'
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
    }
    // {
    //     path: '/student-details',
    //     exact: true,
    //     component: StudentDetails,
    //     fetchStudentDetails: () => fetchStudentDetails()
    // }
];

export default routes;