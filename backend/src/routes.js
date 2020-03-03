import Home from './components/Home'
import Students from './components/Students'
import Teachers from './components/Teachers'
import { fetchStudents } from './api'
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
        fetchTeachers: () => console.log("fetch teachers from api")
    }
];

export default routes;