import Home from './components/Home'
import Students from './components/Students'
import Teachers from './components/Teachers'
import Parents from './components/Parents'
import Student from './components/Student'
import Teacher from './components/Teacher'
import Parent from './components/Parent'
import TeacherForm from './components/ui/TeacherForm'
import ParentForm from './components/ui/ParentForm'
import StudentForm from './components/ui/StudentForm'
import RegisterStudentForm from './components/ui/RegisterStudentForm'
import {
    fetchAll,
    fetchOne,
    save
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
        fetchStudents: async (params = {}) => await fetchAll("/api/students", params)
    },
    {
        path: '/teachers',
        exact: true,
        component: Teachers,
        navlabel: "Teachers",
        navorder: 1,
        fetchTeachers: async (params = {}) => await fetchAll("/api/teachers", params)
    },
    {
        path: '/parents',
        exact: true,
        component: Parents,
        navlabel: "Parents",
        navorder: 3,
        fetchParents: async (params = {}) => await fetchAll("/api/parents", params)
    },
    {
        path: '/student/:id',
        exact: true,
        component: Student,
        fetchStudent: async (id) => await fetchOne(`/api/students/${id}`)
    },
    {
        path: '/teacher/:id',
        exact: true,
        component: Teacher,
        fetchTeacher: async (id) => await fetchOne(`/api/teachers/${id}`)
    },
    {
        path: '/parent/:id',
        exact: true,
        component: Parent,
        fetchParent: async (id) => await fetchOne(`/api/parents/${id}`)
    },
    {
        path: '/teacher/:id/edit',
        exact: true,
        component: TeacherForm,
        saveTeacher: async (data) => await save("/api/teachers", data, "post")
    },
    {
        path: '/students/register',
        exact: true,
        component: RegisterStudentForm,
        saveStudent: async (data) => await save("/api/students/register", data, "post")
    }
];

export default routes;