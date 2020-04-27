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
    "mother_id": 1001,
    "father_id": 1,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 1,
    "grades": {
        "q1": {
            "MATH": 64,
            "LANG": 95,
            "HIST": 76,
            "SCI": 43,
            "ENG": 83
        },
        "q2": {
            "MATH": 86,
            "LANG": 76,
            "HIST": 67,
            "SCI": 80,
            "ENG": 72
        },
        "q3": {
            "MATH": 65,
            "LANG": 85,
            "HIST": 67,
            "SCI": 90,
            "ENG": 97
        },
        "q4": {
            "MATH": 65,
            "LANG": 78,
            "HIST": 81,
            "SCI": 94,
            "ENG": 66
        }
    }
},
{
    "id": 2,
    "first_name": "Noland",
    "last_name": "Greenwood",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "55984 Thompson Alley",
    "mother_id": 1002,
    "father_id": 2,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 94,
            "LANG": 87,
            "HIST": 98,
            "SCI": 69,
            "ENG": 65
        },
        "q2": {
            "MATH": 83,
            "LANG": 91,
            "HIST": 74,
            "SCI": 93,
            "ENG": 86
        },
        "q3": {
            "MATH": 77,
            "LANG": 54,
            "HIST": 75,
            "SCI": 99,
            "ENG": 82
        },
        "q4": {
            "MATH": 93,
            "LANG": 100,
            "HIST": 68,
            "SCI": 94,
            "ENG": 93
        }
    }
},
{
    "id": 3,
    "first_name": "Othella",
    "last_name": "McGinnis",
    "age": 6,
    "gender": "Female",
    "grade": 1,
    "address": "339 Mitchell Road",
    "mother_id": 1003,
    "father_id": 3,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 1,
    "grades": {
        "q1": {
            "MATH": 44,
            "LANG": 66,
            "HIST": 83,
            "SCI": 75,
            "ENG": 93
        },
        "q2": {
            "MATH": 60,
            "LANG": 67,
            "HIST": 92,
            "SCI": 74,
            "ENG": 88
        },
        "q3": {
            "MATH": 96,
            "LANG": 67,
            "HIST": 74,
            "SCI": 66,
            "ENG": 88
        },
        "q4": {
            "MATH": 75,
            "LANG": 60,
            "HIST": 94,
            "SCI": 56,
            "ENG": 83
        }
    }
},
{
    "id": 4,
    "first_name": "Rasia",
    "last_name": "Staden",
    "age": 9,
    "gender": "Female",
    "grade": 4,
    "address": "3637 Montana Trail",
    "mother_id": 1004,
    "father_id": 4,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 5,
    "grades": {
        "q1": {
            "MATH": 69,
            "LANG": 52,
            "HIST": 76,
            "SCI": 83,
            "ENG": 92
        },
        "q2": {
            "MATH": 67,
            "LANG": 82,
            "HIST": 82,
            "SCI": 73,
            "ENG": 67
        },
        "q3": {
            "MATH": 68,
            "LANG": 97,
            "HIST": 47,
            "SCI": 95,
            "ENG": 48
        },
        "q4": {
            "MATH": 91,
            "LANG": 94,
            "HIST": 54,
            "SCI": 85,
            "ENG": 52
        }
    }
},
{
    "id": 5,
    "first_name": "Wain",
    "last_name": "Grastye",
    "age": 8,
    "gender": "Male",
    "grade": 3,
    "address": "14 Del Sol Pass",
    "mother_id": 1005,
    "father_id": 5,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 3,
    "grades": {
        "q1": {
            "MATH": 55,
            "LANG": 83,
            "HIST": 85,
            "SCI": 68,
            "ENG": 87
        },
        "q2": {
            "MATH": 68,
            "LANG": 95,
            "HIST": 68,
            "SCI": 70,
            "ENG": 65
        },
        "q3": {
            "MATH": 87,
            "LANG": 85,
            "HIST": 99,
            "SCI": 99,
            "ENG": 55
        },
        "q4": {
            "MATH": 53,
            "LANG": 65,
            "HIST": 64,
            "SCI": 68,
            "ENG": 65
        }
    }
},
{
    "id": 6,
    "first_name": "Gareth",
    "last_name": "Illem",
    "age": 8,
    "gender": "Male",
    "grade": 3,
    "address": "092 Eliot Parkway",
    "mother_id": 1006,
    "father_id": 6,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 3,
    "grades": {
        "q1": {
            "MATH": 92,
            "LANG": 76,
            "HIST": 83,
            "SCI": 42,
            "ENG": 99
        },
        "q2": {
            "MATH": 69,
            "LANG": 87,
            "HIST": 42,
            "SCI": 73,
            "ENG": 62
        },
        "q3": {
            "MATH": 93,
            "LANG": 95,
            "HIST": 67,
            "SCI": 71,
            "ENG": 52
        },
        "q4": {
            "MATH": 89,
            "LANG": 69,
            "HIST": 78,
            "SCI": 41,
            "ENG": 88
        }
    }
},
{
    "id": 7,
    "first_name": "Seth",
    "last_name": "Boyes",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "92088 Victoria Terrace",
    "mother_id": 1007,
    "father_id": 7,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 53,
            "LANG": 67,
            "HIST": 79,
            "SCI": 85,
            "ENG": 72
        },
        "q2": {
            "MATH": 80,
            "LANG": 80,
            "HIST": 70,
            "SCI": 77,
            "ENG": 67
        },
        "q3": {
            "MATH": 77,
            "LANG": 95,
            "HIST": 59,
            "SCI": 78,
            "ENG": 74
        },
        "q4": {
            "MATH": 65,
            "LANG": 80,
            "HIST": 99,
            "SCI": 77,
            "ENG": 73
        }
    }
},
{
    "id": 8,
    "first_name": "Maurizia",
    "last_name": "Stemp",
    "age": 8,
    "gender": "Female",
    "grade": 3,
    "address": "0369 Larry Alley",
    "mother_id": 1008,
    "father_id": 8,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 3,
    "grades": {
        "q1": {
            "MATH": 47,
            "LANG": 54,
            "HIST": 68,
            "SCI": 67,
            "ENG": 50
        },
        "q2": {
            "MATH": 98,
            "LANG": 53,
            "HIST": 94,
            "SCI": 84,
            "ENG": 81
        },
        "q3": {
            "MATH": 65,
            "LANG": 98,
            "HIST": 77,
            "SCI": 82,
            "ENG": 54
        },
        "q4": {
            "MATH": 81,
            "LANG": 67,
            "HIST": 74,
            "SCI": 62,
            "ENG": 100
        }
    }
},
{
    "id": 9,
    "first_name": "Vina",
    "last_name": "Jorczyk",
    "age": 8,
    "gender": "Female",
    "grade": 3,
    "address": "236 Steensland Circle",
    "mother_id": 1009,
    "father_id": 9,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 3,
    "grades": {
        "q1": {
            "MATH": 90,
            "LANG": 71,
            "HIST": 81,
            "SCI": 69,
            "ENG": 69
        },
        "q2": {
            "MATH": 61,
            "LANG": 66,
            "HIST": 62,
            "SCI": 95,
            "ENG": 66
        },
        "q3": {
            "MATH": 77,
            "LANG": 94,
            "HIST": 87,
            "SCI": 69,
            "ENG": 68
        },
        "q4": {
            "MATH": 43,
            "LANG": 68,
            "HIST": 85,
            "SCI": 73,
            "ENG": 80
        }
    }
},
{
    "id": 10,
    "first_name": "Brunhilde",
    "last_name": "Lidgard",
    "age": 9,
    "gender": "Female",
    "grade": 4,
    "address": "86 La Follette Place",
    "mother_id": 1010,
    "father_id": 10,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 5,
    "grades": {
        "q1": {
            "MATH": 80,
            "LANG": 97,
            "HIST": 66,
            "SCI": 86,
            "ENG": 75
        },
        "q2": {
            "MATH": 70,
            "LANG": 41,
            "HIST": 87,
            "SCI": 68,
            "ENG": 86
        },
        "q3": {
            "MATH": 96,
            "LANG": 65,
            "HIST": 66,
            "SCI": 77,
            "ENG": 62
        },
        "q4": {
            "MATH": 77,
            "LANG": 68,
            "HIST": 80,
            "SCI": 93,
            "ENG": 67
        }
    }
},
{
    "id": 11,
    "first_name": "Reeta",
    "last_name": "Burghall",
    "age": 10,
    "gender": "Female",
    "grade": 5,
    "address": "60128 Bartillon Terrace",
    "mother_id": 1011,
    "father_id": 11,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 6,
    "grades": {
        "q1": {
            "MATH": 68,
            "LANG": 64,
            "HIST": 90,
            "SCI": 68,
            "ENG": 99
        },
        "q2": {
            "MATH": 87,
            "LANG": 66,
            "HIST": 75,
            "SCI": 90,
            "ENG": 46
        },
        "q3": {
            "MATH": 78,
            "LANG": 83,
            "HIST": 75,
            "SCI": 43,
            "ENG": 56
        },
        "q4": {
            "MATH": 72,
            "LANG": 79,
            "HIST": 93,
            "SCI": 48,
            "ENG": 79
        }
    }
},
{
    "id": 12,
    "first_name": "Uta",
    "last_name": "Domerc",
    "age": 10,
    "gender": "Female",
    "grade": 5,
    "address": "226 Golf Junction",
    "mother_id": 1012,
    "father_id": 12,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 6,
    "grades": {
        "q1": {
            "MATH": 69,
            "LANG": 95,
            "HIST": 90,
            "SCI": 88,
            "ENG": 66
        },
        "q2": {
            "MATH": 92,
            "LANG": 98,
            "HIST": 65,
            "SCI": 72,
            "ENG": 52
        },
        "q3": {
            "MATH": 77,
            "LANG": 90,
            "HIST": 82,
            "SCI": 84,
            "ENG": 99
        },
        "q4": {
            "MATH": 71,
            "LANG": 50,
            "HIST": 68,
            "SCI": 96,
            "ENG": 87
        }
    }
},
{
    "id": 13,
    "first_name": "Cletus",
    "last_name": "Banyard",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "39 Northport Trail",
    "mother_id": 1013,
    "father_id": 13,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 82,
            "LANG": 65,
            "HIST": 97,
            "SCI": 83,
            "ENG": 79
        },
        "q2": {
            "MATH": 70,
            "LANG": 74,
            "HIST": 79,
            "SCI": 99,
            "ENG": 90
        },
        "q3": {
            "MATH": 87,
            "LANG": 94,
            "HIST": 74,
            "SCI": 56,
            "ENG": 41
        },
        "q4": {
            "MATH": 73,
            "LANG": 42,
            "HIST": 65,
            "SCI": 48,
            "ENG": 66
        }
    }
},
{
    "id": 14,
    "first_name": "Corrine",
    "last_name": "Whytock",
    "age": 7,
    "gender": "Female",
    "grade": 2,
    "address": "5 Kropf Crossing",
    "mother_id": 1014,
    "father_id": 14,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 62,
            "LANG": 68,
            "HIST": 66,
            "SCI": 81,
            "ENG": 99
        },
        "q2": {
            "MATH": 87,
            "LANG": 66,
            "HIST": 77,
            "SCI": 79,
            "ENG": 88
        },
        "q3": {
            "MATH": 47,
            "LANG": 65,
            "HIST": 60,
            "SCI": 57,
            "ENG": 70
        },
        "q4": {
            "MATH": 43,
            "LANG": 81,
            "HIST": 88,
            "SCI": 69,
            "ENG": 96
        }
    }
},
{
    "id": 15,
    "first_name": "Freda",
    "last_name": "Callacher",
    "age": 7,
    "gender": "Female",
    "grade": 2,
    "address": "6864 Oakridge Way",
    "mother_id": 1015,
    "father_id": 15,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 100,
            "LANG": 69,
            "HIST": 68,
            "SCI": 65,
            "ENG": 91
        },
        "q2": {
            "MATH": 70,
            "LANG": 93,
            "HIST": 44,
            "SCI": 46,
            "ENG": 56
        },
        "q3": {
            "MATH": 67,
            "LANG": 65,
            "HIST": 66,
            "SCI": 67,
            "ENG": 69
        },
        "q4": {
            "MATH": 89,
            "LANG": 81,
            "HIST": 99,
            "SCI": 72,
            "ENG": 66
        }
    }
},
{
    "id": 16,
    "first_name": "Alister",
    "last_name": "Farnell",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "8 Crest Line Way",
    "mother_id": 1016,
    "father_id": 16,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 41,
            "LANG": 89,
            "HIST": 73,
            "SCI": 94,
            "ENG": 100
        },
        "q2": {
            "MATH": 70,
            "LANG": 66,
            "HIST": 64,
            "SCI": 88,
            "ENG": 68
        },
        "q3": {
            "MATH": 74,
            "LANG": 46,
            "HIST": 94,
            "SCI": 68,
            "ENG": 65
        },
        "q4": {
            "MATH": 75,
            "LANG": 85,
            "HIST": 88,
            "SCI": 67,
            "ENG": 75
        }
    }
},
{
    "id": 17,
    "first_name": "June",
    "last_name": "Colerick",
    "age": 10,
    "gender": "Female",
    "grade": 5,
    "address": "31 Talmadge Parkway",
    "mother_id": 1017,
    "father_id": 17,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 6,
    "grades": {
        "q1": {
            "MATH": 66,
            "LANG": 99,
            "HIST": 100,
            "SCI": 68,
            "ENG": 89
        },
        "q2": {
            "MATH": 77,
            "LANG": 43,
            "HIST": 87,
            "SCI": 73,
            "ENG": 69
        },
        "q3": {
            "MATH": 68,
            "LANG": 69,
            "HIST": 46,
            "SCI": 75,
            "ENG": 72
        },
        "q4": {
            "MATH": 79,
            "LANG": 67,
            "HIST": 80,
            "SCI": 63,
            "ENG": 97
        }
    }
},
{
    "id": 18,
    "first_name": "Sherlocke",
    "last_name": "Gillebert",
    "age": 7,
    "gender": "Male",
    "grade": 2,
    "address": "46 Monterey Point",
    "mother_id": 1018,
    "father_id": 18,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 69,
            "LANG": 94,
            "HIST": 81,
            "SCI": 65,
            "ENG": 65
        },
        "q2": {
            "MATH": 83,
            "LANG": 96,
            "HIST": 92,
            "SCI": 82,
            "ENG": 63
        },
        "q3": {
            "MATH": 100,
            "LANG": 74,
            "HIST": 64,
            "SCI": 86,
            "ENG": 55
        },
        "q4": {
            "MATH": 84,
            "LANG": 74,
            "HIST": 67,
            "SCI": 80,
            "ENG": 52
        }
    }
},
{
    "id": 19,
    "first_name": "Michele",
    "last_name": "Eatherton",
    "age": 9,
    "gender": "Female",
    "grade": 4,
    "address": "9 Nancy Pass",
    "mother_id": 1019,
    "father_id": 19,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 5,
    "grades": {
        "q1": {
            "MATH": 65,
            "LANG": 71,
            "HIST": 50,
            "SCI": 80,
            "ENG": 65
        },
        "q2": {
            "MATH": 66,
            "LANG": 94,
            "HIST": 89,
            "SCI": 79,
            "ENG": 68
        },
        "q3": {
            "MATH": 70,
            "LANG": 99,
            "HIST": 72,
            "SCI": 67,
            "ENG": 57
        },
        "q4": {
            "MATH": 43,
            "LANG": 70,
            "HIST": 54,
            "SCI": 51,
            "ENG": 75
        }
    }
},
{
    "id": 20,
    "first_name": "Gratiana",
    "last_name": "Huggin",
    "age": 7,
    "gender": "Female",
    "grade": 2,
    "address": "47 Stephen Terrace",
    "mother_id": 1020,
    "father_id": 20,
    "createdAt": 1587151403657,
    "updatedAt": 1587151403657,
    "teacher_id": 2,
    "grades": {
        "q1": {
            "MATH": 62,
            "LANG": 70,
            "HIST": 97,
            "SCI": 74,
            "ENG": 65
        },
        "q2": {
            "MATH": 79,
            "LANG": 95,
            "HIST": 65,
            "SCI": 78,
            "ENG": 75
        },
        "q3": {
            "MATH": 84,
            "LANG": 80,
            "HIST": 82,
            "SCI": 72,
            "ENG": 91
        },
        "q4": {
            "MATH": 66,
            "LANG": 77,
            "HIST": 92,
            "SCI": 43,
            "ENG": 86
        }
    }
}];

const PARENTS = [
    {
        "id": 1,
        "first_name": "Domingo",
        "last_name": "Dunbar",
        "gender": "Male",
        "address": "8 Summerview Street",
        "phone_number": "613-977-8226",
        "email": "ddunbar0@linkedin.com"
    },
    {
        "id": 1001,
        "first_name": "Francisca",
        "last_name": "Loyley",
        "gender": "Female",
        "address": "523 Barby Street",
        "phone_number": "768-402-9826",
        "email": "floyley0@w3.org"
    },
    {
        "id": 2,
        "first_name": "Logan",
        "last_name": "Filkin",
        "gender": "Male",
        "address": "878 Russell Junction",
        "phone_number": "524-829-3225",
        "email": "lfilkin1@oaic.gov.au"
    },
    {
        "id": 1002,
        "first_name": "Linet",
        "last_name": "Kesteven",
        "gender": "Female",
        "address": "5916 Sunbrook Park",
        "phone_number": "747-968-7925",
        "email": "lkesteven1@unblog.fr"
    },
    {
        "id": 3,
        "first_name": "Burt",
        "last_name": "Chamberlaine",
        "gender": "Male",
        "address": "194 Toban Street",
        "phone_number": "103-381-8680",
        "email": "bchamberlaine2@e-recht24.de"
    },
    {
        "id": 1003,
        "first_name": "Shirley",
        "last_name": "Lapish",
        "gender": "Female",
        "address": "03924 Mallory Court",
        "phone_number": "925-919-4525",
        "email": "slapish2@wikispaces.com"
    },
    {
        "id": 4,
        "first_name": "Ingra",
        "last_name": "Tunnow",
        "gender": "Male",
        "address": "7475 Morningstar Park",
        "phone_number": "967-728-1229",
        "email": "itunnow3@npr.org"
    },
    {
        "id": 1004,
        "first_name": "Katti",
        "last_name": "Nunnerley",
        "gender": "Female",
        "address": "39916 Springs Drive",
        "phone_number": "404-558-8800",
        "email": "knunnerley3@toplist.cz"
    },
    {
        "id": 5,
        "first_name": "Westbrooke",
        "last_name": "Orr",
        "gender": "Male",
        "address": "5 Esch Hill",
        "phone_number": "853-616-2030",
        "email": "worr4@prweb.com"
    },
    {
        "id": 1005,
        "first_name": "Truda",
        "last_name": "Ireland",
        "gender": "Female",
        "address": "67 Gale Point",
        "phone_number": "534-837-8657",
        "email": "tireland4@parallels.com"
    },
    {
        "id": 6,
        "first_name": "Kristofer",
        "last_name": "Elwin",
        "gender": "Male",
        "address": "4 Maple Parkway",
        "phone_number": "641-296-5031",
        "email": "kelwin5@deliciousdays.com"
    },
    {
        "id": 1006,
        "first_name": "Meggi",
        "last_name": "Drover",
        "gender": "Female",
        "address": "11610 Springview Point",
        "phone_number": "705-923-4459",
        "email": "mdrover5@virginia.edu"
    },
    {
        "id": 7,
        "first_name": "Garfield",
        "last_name": "Baud",
        "gender": "Male",
        "address": "9 Huxley Circle",
        "phone_number": "197-226-9962",
        "email": "gbaud6@go.com"
    },
    {
        "id": 1007,
        "first_name": "Teddi",
        "last_name": "Mendus",
        "gender": "Female",
        "address": "6763 Transport Parkway",
        "phone_number": "929-907-9589",
        "email": "tmendus6@simplemachines.org"
    },
    {
        "id": 8,
        "first_name": "Barnard",
        "last_name": "Salvatore",
        "gender": "Male",
        "address": "15 Melody Court",
        "phone_number": "563-511-7937",
        "email": "bsalvatore7@ebay.com"
    },
    {
        "id": 1008,
        "first_name": "Sylvia",
        "last_name": "Barme",
        "gender": "Female",
        "address": "47475 Melvin Crossing",
        "phone_number": "290-720-1468",
        "email": "sbarme7@cpanel.net"
    },
    {
        "id": 9,
        "first_name": "Harold",
        "last_name": "Edon",
        "gender": "Male",
        "address": "40 Nobel Plaza",
        "phone_number": "362-535-9760",
        "email": "hedon8@businessinsider.com"
    },
    {
        "id": 1009,
        "first_name": "Bathsheba",
        "last_name": "Theodoris",
        "gender": "Female",
        "address": "9181 Tomscot Crossing",
        "phone_number": "430-959-3325",
        "email": "btheodoris8@paginegialle.it"
    },
    {
        "id": 10,
        "first_name": "Gayle",
        "last_name": "Jeandel",
        "gender": "Male",
        "address": "6565 Dakota Trail",
        "phone_number": "707-153-0344",
        "email": "gjeandel9@si.edu"
    },
    {
        "id": 1010,
        "first_name": "Conni",
        "last_name": "Giacopelo",
        "gender": "Female",
        "address": "4 Holmberg Terrace",
        "phone_number": "487-972-7148",
        "email": "cgiacopelo9@cbsnews.com"
    },
    {
        "id": 11,
        "first_name": "Laughton",
        "last_name": "McPeck",
        "gender": "Male",
        "address": "01988 Morning Drive",
        "phone_number": "502-313-6936",
        "email": "lmcpecka@google.com"
    },
    {
        "id": 1011,
        "first_name": "Roxine",
        "last_name": "Spall",
        "gender": "Female",
        "address": "7 Buell Avenue",
        "phone_number": "926-627-2393",
        "email": "rspalla@qq.com"
    },
    {
        "id": 12,
        "first_name": "Jodi",
        "last_name": "Golt",
        "gender": "Male",
        "address": "1 Loftsgordon Junction",
        "phone_number": "687-574-8900",
        "email": "jgoltb@parallels.com"
    },
    {
        "id": 1012,
        "first_name": "Karly",
        "last_name": "Formby",
        "gender": "Female",
        "address": "134 Hoard Park",
        "phone_number": "242-656-1764",
        "email": "kformbyb@naver.com"
    },
    {
        "id": 13,
        "first_name": "Ethelred",
        "last_name": "Harse",
        "gender": "Male",
        "address": "897 Cascade Center",
        "phone_number": "657-507-5816",
        "email": "eharsec@jalbum.net"
    },
    {
        "id": 1013,
        "first_name": "Henka",
        "last_name": "Stean",
        "gender": "Female",
        "address": "6 Fordem Court",
        "phone_number": "437-137-5880",
        "email": "hsteanc@europa.eu"
    },
    {
        "id": 14,
        "first_name": "Guglielmo",
        "last_name": "Seely",
        "gender": "Male",
        "address": "99112 Eggendart Circle",
        "phone_number": "359-399-6483",
        "email": "gseelyd@fastcompany.com"
    },
    {
        "id": 1014,
        "first_name": "Wendeline",
        "last_name": "Simonich",
        "gender": "Female",
        "address": "2450 Maywood Avenue",
        "phone_number": "289-606-8507",
        "email": "wsimonichd@webs.com"
    },
    {
        "id": 15,
        "first_name": "Lionel",
        "last_name": "Franzettoini",
        "gender": "Male",
        "address": "76 Harper Junction",
        "phone_number": "143-227-6838",
        "email": "lfranzettoinie@walmart.com"
    },
    {
        "id": 1015,
        "first_name": "Bonni",
        "last_name": "Buttle",
        "gender": "Female",
        "address": "52805 Manley Road",
        "phone_number": "239-779-7389",
        "email": "bbuttlee@bing.com"
    },
    {
        "id": 16,
        "first_name": "Irvin",
        "last_name": "Cissell",
        "gender": "Male",
        "address": "05 Ridgeway Hill",
        "phone_number": "603-734-6790",
        "email": "icissellf@wikispaces.com"
    },
    {
        "id": 1016,
        "first_name": "Augusta",
        "last_name": "Pirt",
        "gender": "Female",
        "address": "1 Ramsey Hill",
        "phone_number": "806-386-8494",
        "email": "apirtf@redcross.org"
    },
    {
        "id": 17,
        "first_name": "Doyle",
        "last_name": "Middlebrook",
        "gender": "Male",
        "address": "8920 Pleasure Alley",
        "phone_number": "951-660-4441",
        "email": "dmiddlebrookg@imageshack.us"
    },
    {
        "id": 1017,
        "first_name": "Beth",
        "last_name": "Lettsom",
        "gender": "Female",
        "address": "041 Hagan Alley",
        "phone_number": "895-754-8200",
        "email": "blettsomg@toplist.cz"
    },
    {
        "id": 18,
        "first_name": "Donaugh",
        "last_name": "Grimley",
        "gender": "Male",
        "address": "0 Armistice Point",
        "phone_number": "519-250-8838",
        "email": "dgrimleyh@phpbb.com"
    },
    {
        "id": 1018,
        "first_name": "Codie",
        "last_name": "Lockart",
        "gender": "Female",
        "address": "077 Beilfuss Junction",
        "phone_number": "376-786-0142",
        "email": "clockarth@amazon.co.uk"
    },
    {
        "id": 19,
        "first_name": "Wilbert",
        "last_name": "Vassar",
        "gender": "Male",
        "address": "5523 Dixon Park",
        "phone_number": "869-184-8622",
        "email": "wvassari@marriott.com"
    },
    {
        "id": 1019,
        "first_name": "Aurelie",
        "last_name": "Hardern",
        "gender": "Female",
        "address": "06057 Bobwhite Junction",
        "phone_number": "591-282-4156",
        "email": "aharderni@imgur.com"
    },
    {
        "id": 20,
        "first_name": "Upton",
        "last_name": "Iley",
        "gender": "Male",
        "address": "855 Delladonna Circle",
        "phone_number": "389-134-3756",
        "email": "uileyj@domainmarket.com"
    },
    {
        "id": 1020,
        "first_name": "Bernita",
        "last_name": "Haines",
        "gender": "Female",
        "address": "84 Waubesa Place",
        "phone_number": "202-750-3649",
        "email": "bhainesj@mac.com"
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

// export const fetchStudentTeacher = () => {
//     return [
//         {
//             "student_id": 1,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 91,
//                     "LANG": 54,
//                     "HIST": 42,
//                     "SCI": 97,
//                     "READ": 63
//                 },
//                 "q2": {
//                     "MATH": 78,
//                     "LANG": 70,
//                     "HIST": 69,
//                     "SCI": 65,
//                     "READ": 42
//                 },
//                 "q3": {
//                     "MATH": 69,
//                     "LANG": 89,
//                     "HIST": 88,
//                     "SCI": 95,
//                     "READ": 90
//                 },
//                 "q4": {
//                     "MATH": 86,
//                     "LANG": 86,
//                     "HIST": 66,
//                     "SCI": 100,
//                     "READ": 67
//                 }
//             },
//             "school_year_code": "2020"
//         },
//         {
//             "student_id": 3,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 65,
//                     "LANG": 88,
//                     "HIST": 65,
//                     "SCI": 45,
//                     "READ": 49
//                 },
//                 "q2": {
//                     "MATH": 69,
//                     "LANG": 58,
//                     "HIST": 68,
//                     "SCI": 72,
//                     "READ": 93
//                 },
//                 "q3": {
//                     "MATH": 78,
//                     "LANG": 97,
//                     "HIST": 87,
//                     "SCI": 78,
//                     "READ": 82
//                 },
//                 "q4": {
//                     "MATH": 72,
//                     "LANG": 75,
//                     "HIST": 69,
//                     "SCI": 54,
//                     "READ": 100
//                 }
//             },
//             "school_year_code": "2020"
//         },
//         {
//             "student_id": 52,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 67,
//                     "LANG": 51,
//                     "HIST": 67,
//                     "SCI": 58,
//                     "READ": 81
//                 },
//                 "q2": {
//                     "MATH": 77,
//                     "LANG": 100,
//                     "HIST": 68,
//                     "SCI": 80,
//                     "READ": 70
//                 },
//                 "q3": {
//                     "MATH": 40,
//                     "LANG": 68,
//                     "HIST": 98,
//                     "SCI": 70,
//                     "READ": 74
//                 },
//                 "q4": {
//                     "MATH": 66,
//                     "LANG": 79,
//                     "HIST": 77,
//                     "SCI": 67,
//                     "READ": 54
//                 }
//             },
//             "school_year_code": "2020"
//         },
//         {
//             "student_id": 64,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 93,
//                     "LANG": 69,
//                     "HIST": 97,
//                     "SCI": 81,
//                     "READ": 99
//                 },
//                 "q2": {
//                     "MATH": 83,
//                     "LANG": 98,
//                     "HIST": 76,
//                     "SCI": 47,
//                     "READ": 90
//                 },
//                 "q3": {
//                     "MATH": 97,
//                     "LANG": 61,
//                     "HIST": 70,
//                     "SCI": 97,
//                     "READ": 82
//                 },
//                 "q4": {
//                     "MATH": 94,
//                     "LANG": 95,
//                     "HIST": 82,
//                     "SCI": 74,
//                     "READ": 89
//                 }
//             },
//             "school_year_code": "2020"
//         },
//         {
//             "student_id": 72,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 66,
//                     "LANG": 81,
//                     "HIST": 66,
//                     "SCI": 73,
//                     "READ": 73
//                 },
//                 "q2": {
//                     "MATH": 96,
//                     "LANG": 68,
//                     "HIST": 85,
//                     "SCI": 87,
//                     "READ": 100
//                 },
//                 "q3": {
//                     "MATH": 55,
//                     "LANG": 60,
//                     "HIST": 99,
//                     "SCI": 66,
//                     "READ": 55
//                 },
//                 "q4": {
//                     "MATH": 41,
//                     "LANG": 71,
//                     "HIST": 65,
//                     "SCI": 70,
//                     "READ": 61
//                 }
//             },
//             "school_year_code": "2020"
//         },
//         {
//             "student_id": 74,
//             "teacher_id": 1,
//             "grades": {
//                 "q1": {
//                     "MATH": 79,
//                     "LANG": 43,
//                     "HIST": 83,
//                     "SCI": 84,
//                     "READ": 74
//                 },
//                 "q2": {
//                     "MATH": 69,
//                     "LANG": 89,
//                     "HIST": 94,
//                     "SCI": 53,
//                     "READ": 67
//                 },
//                 "q3": {
//                     "MATH": 78,
//                     "LANG": 84,
//                     "HIST": 73,
//                     "SCI": 91,
//                     "READ": 95
//                 },
//                 "q4": {
//                     "MATH": 65,
//                     "LANG": 44,
//                     "HIST": 68,
//                     "SCI": 67,
//                     "READ": 100
//                 }
//             },
//             "school_year_code": "2020"
//         }
//     ]
// }