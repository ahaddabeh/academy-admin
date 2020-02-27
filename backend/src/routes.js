import Home from './components/Home'
import Students from './components/Students'
import { fetchStudents } from './api'
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        navlabel: "Home"
    },
    {
        path: '/students',
        exact: true,
        component: Students,
        navlabel: "Students",
        fetchStudents: () => fetchStudents()
    }
];

export default routes;