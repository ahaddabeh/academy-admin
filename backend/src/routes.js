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
        fetchTeachers: () => fetchTeachers(),
        fetchParents: () => fetchParents()
    },
    {
        path: '/teacher/:id',
        exact: true,
        component: Teacher,
        fetchTeacher: (id) => fetchTeacher(id),
        fetchStudents: () => fetchStudents()
    },
    {
        path: '/parent/:id',
        exact: true,
        component: Parent,
        fetchParent: (id) => fetchParent(id),
        fetchStudents: () => fetchStudents()
    },
    {
        path: '/teacher/:id/edit',
        exact: true,
        component: TeacherForm,
        fetchTeacher: (id) => fetchTeacher(id)
    },
    {
        path: '/parent/:id/edit',
        exact: true,
        component: ParentForm,
        fetchParent: (id) => fetchParent(id)
    },
    {
        path: '/student/:id/register',
        exact: true,
        component: RegisterStudentForm,
        fetchStudent: (id) => fetchStudent(id)
    },
    {
        path: '/student/:id/edit',
        exact: true,
        component: StudentForm,
        fetchStudent: (id) => fetchStudent(id)
    },
];

export default routes;