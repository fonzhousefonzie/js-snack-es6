let students = [
    { name: 'Marco', 
        id: 213, 
        grades: 78 
    },
    { name: 'Paola', 
        id: 110, 
        grades: 96 
    },
    { name: 'Andrea', 
        id: 250, 
        grades: 48 
    },
    { name: 'Gaia', 
        id: 145, 
        grades: 74 
    },
    { name: 'Luigi', 
        id: 196, 
        grades: 68 
    },
    { name: 'Piero', 
        id: 102, 
        grades: 50 
    },
    { name: 'Francesca', 
        id: 120, 
        grades: 84 
    },
  ];

/* con forEach
const targhe = [];

  students.forEach((element, i, students) => {
    targhe.push(students[i].name.toUpperCase());
});
*/

// con map
const targhe = students.map((i) => {
    return i.name.toUpperCase();
});

console.log(targhe);

//separatore
console.log("------------------------------------------------------");

const gradesOver70 = students.filter((i) => {
    return i.grades > 70
});

console.log(gradesOver70);

//separatore
console.log("------------------------------------------------------");

const gradesOver70IdOver120 = students.filter((i) => {
    return i.grades > 70 && i.id > 120
});

console.log(gradesOver70IdOver120);