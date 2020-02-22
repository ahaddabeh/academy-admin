import Home from './components/Home'
import Students from './components/Students'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/students',
        exact: true,
        component: Students,
    }
];

export default routes;