// con forEach

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 0;
const max = 4;
const soloUomini = [];

myArray.forEach((element, i, myArray) => {
    if(i >= min && i <= max){
        soloUomini.push(myArray[i]);
    };
});

console.log(soloUomini);

// separatore
console.log("-----------------------------------------------------------");

// con filter

const myArray1 = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min1 = 0;
const max1 = 4;

const soloUomini1 = myArray1.filter((nome) => {
    return myArray1.indexOf(nome) >= min1 && myArray1.indexOf(nome) <= max1;
});

console.log(soloUomini1);