const elencoBici = [
    {
        nome : "Mountain Bike",
        pesoInKg : 15
    },
    {
        nome : "Ride Bike",
        pesoInKg : 10
    },
    {
        nome : "City Bike",
        pesoInKg : 20
    }
];

let biciLeggera = {
    pesoInKg : 100
}

for (let i = 0; i < elencoBici.length; i++){
    const {pesoInKg} = elencoBici[i];

    if(pesoInKg < biciLeggera.pesoInKg){
        biciLeggera = elencoBici[i];
    }
}


console.log(biciLeggera);

const {nome, pesoInKg} = biciLeggera;

const container = document.getElementById('container');

container.innerHTML = `<h1>La ${nome} è leggerissima!</h1>
<h2>Pesa soltanto ${pesoInKg}kg!!!</h2>`