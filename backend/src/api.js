import Students from "./components/Students"
import Teachers from "./components/Teachers"
import Parents from "./components/Parents"


const _fetchStudent = {

    "id": 1,
    "first_name": "Gene",
    "last_name": "O'Dooghaine",
    "age": 6,
    "gender": "Male",
    "grade": 1,
    "address": "854 Leroy Road",
    "family_id": 0,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717,
    "teacher": {
        "id": 1,
        "first_name": "Boniface",
        "last_name": "Laycock",
        "gender": "Male",
        "address": "6 Leroy Trail",
        "phone_number": "993-797-1971",
        "grade": 1
    },
    "parents": [
        {
            "id": 3,
            "first_name": "Bucky",
            "last_name": "Redfield",
            "email": "bredfield2@nps.gov",
            "gender": "Male",
            "address": "8389 Sage Park",
            "phone_number": "565-500-7409",
            "family_id": 0,
            "createdAt": 1582067651717,
            "updatedAt": 1582067651717
        },
        {
            "id": 1,
            "first_name": "Adelind",
            "last_name": "Henfre",
            "email": "ahenfre0@msn.com",
            "gender": "Female",
            "address": "450 Hooker Crossing",
            "phone_number": "994-235-3161",
            "family_id": 0,
            "createdAt": 1582067651717,
            "updatedAt": 1582067651717
        }
    ],
    "attendance": [
        {
            "school_year_code": 2020,
            "status": "T",
            "date": "(JSON string)"
        }
    ],
    "siblings": [
        {
            "student_id": 1,
            "first_name": '',
            "last_name": ''
        }
    ]
}


const STUDENTS = [{
    "id": 1,
    "first_name": "Gene",
    "last_name": "O'Dooghaine",
    "age": 6,
    "gender": "Male",
    "grade": 1,
    "address": "854 Leroy Road",
    "family_id": 0,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 2,
    "first_name": "Noland",
    "last_name": "Greenwood",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "55984 Thompson Alley",
    "family_id": 0,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 3,
    "first_name": "Othella",
    "last_name": "McGinnis",
    "age": 6,
    "gender": "Female",
    "grade": 1,
    "address": "339 Mitchell Road",
    "family_id": 1,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 4,
    "first_name": "Rasia",
    "last_name": "Staden",
    "age": 9,
    "gender": "Female",
    "grade": 4,
    "address": "3637 Montana Trail",
    "family_id": 1,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 5,
    "first_name": "Wain",
    "last_name": "Grastye",
    "age": 8,
    "gender": "Male",
    "grade": 3,
    "address": "14 Del Sol Pass",
    "family_id": 1,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 6,
    "first_name": "Gareth",
    "last_name": "Illem",
    "age": 8,
    "gender": "Male",
    "grade": 3,
    "address": "092 Eliot Parkway",
    "family_id": 2,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 7,
    "first_name": "Seth",
    "last_name": "Boyes",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "92088 Victoria Terrace",
    "family_id": 2,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 8,
    "first_name": "Maurizia",
    "last_name": "Stemp",
    "age": 8,
    "gender": "Female",
    "grade": 3,
    "address": "0369 Larry Alley",
    "family_id": 3,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 9,
    "first_name": "Vina",
    "last_name": "Jorczyk",
    "age": 8,
    "gender": "Female",
    "grade": 3,
    "address": "236 Steensland Circle",
    "family_id": 3,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
},
{
    "id": 10,
    "first_name": "Brunhilde",
    "last_name": "Lidgard",
    "age": 9,
    "gender": "Female",
    "grade": 4,
    "address": "86 La Follette Place",
    "family_id": 4,
    "createdAt": 1582067651717,
    "updatedAt": 1582067651717
}];

const PARENTS = [
    {
        "id": 3,
        "first_name": "Bucky",
        "last_name": "Redfield",
        "email": "bredfield2@nps.gov",
        "gender": "Male",
        "address": "8389 Sage Park",
        "phone_number": "565-500-7409",
        "family_id": 0,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 1,
        "first_name": "Adelind",
        "last_name": "Henfre",
        "email": "ahenfre0@msn.com",
        "gender": "Female",
        "address": "450 Hooker Crossing",
        "phone_number": "994-235-3161",
        "family_id": 0,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 4,
        "first_name": "Cazzie",
        "last_name": "Jonson",
        "email": "cjonson3@pinterest.com",
        "gender": "Male",
        "address": "2682 Mendota Drive",
        "phone_number": "214-483-5020",
        "family_id": 1,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 2,
        "first_name": "Marjorie",
        "last_name": "Timberlake",
        "email": "mtimberlake1@npr.org",
        "gender": "Female",
        "address": "6 Summer Ridge Alley",
        "phone_number": "217-939-4724",
        "family_id": 1,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 5,
        "first_name": "Timotheus",
        "last_name": "Reily",
        "email": "treily4@smh.com.au",
        "gender": "Male",
        "address": "20770 Hallows Hill",
        "phone_number": "318-544-4315",
        "family_id": 2,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 7,
        "first_name": "Rodina",
        "last_name": "Vowden",
        "email": "rvowden6@sciencedaily.com",
        "gender": "Female",
        "address": "60 Victoria Lane",
        "phone_number": "375-415-8295",
        "family_id": 2,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 6,
        "first_name": "Ronald",
        "last_name": "Bergen",
        "email": "rbergen5@naver.com",
        "gender": "Male",
        "address": "3370 Elka Park",
        "phone_number": "821-437-0911",
        "family_id": 3,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 9,
        "first_name": "Marcie",
        "last_name": "Saunt",
        "email": "msaunt8@lulu.com",
        "gender": "Female",
        "address": "85335 Cambridge Pass",
        "phone_number": "671-650-0867",
        "family_id": 3,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 8,
        "first_name": "Gal",
        "last_name": "Hindhaugh",
        "email": "ghindhaugh7@123-reg.co.uk",
        "gender": "Male",
        "address": "4 Thompson Court",
        "phone_number": "171-243-7102",
        "family_id": 4,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 10,
        "first_name": "Loree",
        "last_name": "Esley",
        "email": "lesley9@163.com",
        "gender": "Female",
        "address": "2711 Pearson Road",
        "phone_number": "900-314-0085",
        "family_id": 4,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 13,
        "first_name": "Alec",
        "last_name": "Petrillo",
        "email": "apetrilloc@jigsy.com",
        "gender": "Male",
        "address": "1207 Corry Center",
        "phone_number": "443-624-7200",
        "family_id": 5,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 11,
        "first_name": "Donica",
        "last_name": "Chaffen",
        "email": "dchaffena@spotify.com",
        "gender": "Female",
        "address": "52363 Vidon Point",
        "phone_number": "269-319-6985",
        "family_id": 5,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 14,
        "first_name": "Munmro",
        "last_name": "Chown",
        "email": "mchownd@berkeley.edu",
        "gender": "Male",
        "address": "81916 Farmco Crossing",
        "phone_number": "687-438-3447",
        "family_id": 6,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 12,
        "first_name": "Lanna",
        "last_name": "Scholar",
        "email": "lscholarb@walmart.com",
        "gender": "Female",
        "address": "1542 Springs Circle",
        "phone_number": "674-931-2133",
        "family_id": 6,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 15,
        "first_name": "Bruce",
        "last_name": "Quickenden",
        "email": "bquickendene@amazon.co.jp",
        "gender": "Male",
        "address": "84778 Thackeray Plaza",
        "phone_number": "739-661-0412",
        "family_id": 7,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 16,
        "first_name": "Audrye",
        "last_name": "Ghioni",
        "email": "aghionif@fda.gov",
        "gender": "Female",
        "address": "632 Sutteridge Hill",
        "phone_number": "544-802-8020",
        "family_id": 7,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 17,
        "first_name": "Felic",
        "last_name": "Reddin",
        "email": "fredding@mozilla.org",
        "gender": "Male",
        "address": "698 Meadow Vale Junction",
        "phone_number": "690-183-4296",
        "family_id": 8,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 18,
        "first_name": "Jo-anne",
        "last_name": "Merrington",
        "email": "jmerringtonh@discovery.com",
        "gender": "Female",
        "address": "4262 Pearson Lane",
        "phone_number": "274-627-8244",
        "family_id": 8,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 19,
        "first_name": "Lane",
        "last_name": "Gosnay",
        "email": "lgosnayi@sina.com.cn",
        "gender": "Male",
        "address": "811 Gina Plaza",
        "phone_number": "451-546-0903",
        "family_id": 9,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 24,
        "first_name": "Chelsie",
        "last_name": "Burk",
        "email": "cburkn@wikimedia.org",
        "gender": "Female",
        "address": "05 Packers Trail",
        "phone_number": "883-165-3199",
        "family_id": 9,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    },
    {
        "id": 20,
        "first_name": "Toddie",
        "last_name": "Judgkins",
        "email": "tjudgkinsj@dyndns.org",
        "gender": "Male",
        "address": "6 Arapahoe Terrace",
        "phone_number": "606-103-9680",
        "family_id": 10,
        "createdAt": 1582067651717,
        "updatedAt": 1582067651717
    }
];
const TEACHERS =
    [
        {
            "id": 1,
            "first_name": "Boniface",
            "last_name": "Laycock",
            "gender": "Male",
            "address": "6 Leroy Trail",
            "phone_number": "993-797-1971",
            "grade": 1
        },
        {
            "id": 2,
            "first_name": "Rae",
            "last_name": "Syne",
            "gender": "Female",
            "address": "0 South Circle",
            "phone_number": "262-279-8767",
            "grade": 2
        },
        {
            "id": 3,
            "first_name": "Myrwyn",
            "last_name": "Filochov",
            "gender": "Male",
            "address": "1 Vera Court",
            "phone_number": "304-320-3180",
            "grade": 3
        },
        {
            "id": 4,
            "first_name": "Tallou",
            "last_name": "Stansby",
            "gender": "Female",
            "address": "05 Scofield Crossing",
            "phone_number": "445-400-3912",
            "grade": 2
        },
        {
            "id": 5,
            "first_name": "Olivia",
            "last_name": "Sheran",
            "gender": "Female",
            "address": "9 Comanche Point",
            "phone_number": "792-571-5576",
            "grade": 4
        },
        {
            "id": 6,
            "first_name": "Amitie",
            "last_name": "Kennifeck",
            "gender": "Female",
            "address": "9694 Pepper Wood Street",
            "phone_number": "544-611-5341",
            "grade": 5
        },
        {
            "id": 7,
            "first_name": "Granger",
            "last_name": "Michele",
            "gender": "Male",
            "address": "8018 Johnson Park",
            "phone_number": "427-984-5140",
            "grade": 2
        },
        {
            "id": 8,
            "first_name": "Ab",
            "last_name": "Brixey",
            "gender": "Male",
            "address": "74 Merchant Park",
            "phone_number": "103-305-3602",
            "grade": 5
        },
        {
            "id": 9,
            "first_name": "Abdul",
            "last_name": "Pont",
            "gender": "Male",
            "address": "675 Crownhardt Junction",
            "phone_number": "306-445-2198",
            "grade": 5
        },
        {
            "id": 10,
            "first_name": "Mirna",
            "last_name": "Monelle",
            "gender": "Female",
            "address": "17 Vidon Junction",
            "phone_number": "104-999-7412",
            "grade": 4
        }
    ];


export const fetchStudents = () => STUDENTS;

export const fetchParents = () => PARENTS

export const fetchTeachers = () => TEACHERS;

export const fetchStudent = (id) => STUDENTS.find(student => student.id === +id);

export const fetchParent = (id) => PARENTS.find(parent => parent.id === +id);

export const fetchTeacher = (id) => TEACHERS.find(teacher => teacher.id === +id);

export const fetchStudentTeacher = () => {
    return [
        {
            "student_id": 1,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 93,
                    "LANG": 92,
                    "SCI": 91,
                    "HIST": 80,
                    "READ": 85
                },
                "q3": {
                    "MATH": 82,
                    "LANG": 87,
                    "SCI": 95,
                    "HIST": 91,
                    "READ": 89
                },
                "q4": {
                    "MATH": 91,
                    "LANG": 81,
                    "SCI": 87,
                    "HIST": 98,
                    "READ": 93
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 1,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 3,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 52,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 64,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 72,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 74,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 75,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 76,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 81,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 84,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 86,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 96,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 111,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 112,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 116,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 117,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 122,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 125,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 129,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 136,
            "teacher_id": 1,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 138,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 141,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 145,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 148,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 154,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 161,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 165,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 166,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 168,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 170,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 176,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 178,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 179,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 181,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 182,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 184,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 186,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 187,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 189,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 191,
            "teacher_id": 11,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 193,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 195,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 196,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 198,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 199,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 205,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 206,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        },
        {
            "student_id": 207,
            "teacher_id": 12,
            "grades": {
                "q1": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q2": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q3": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                },
                "q4": {
                    "MATH": 94,
                    "LANG": 90,
                    "SCI": 92,
                    "HIST": 90,
                    "READ": 95
                }
            },
            "school_year_code": "2020"
        }
    ]
}