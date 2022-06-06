const squadreInGara = [
    {
        nome : "Hawkins",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Manduria",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Costanza",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Merano",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Meudon",
        punti : 0,
        falliSubiti : 0
    },
    {
        nome : "Bourgoin-Jailleu",
        punti : 0,
        falliSubiti : 0
    }
];

const squadreEFalli = [];

for (let i = 0; i < squadreInGara.length; i++){
    
    let randomNum = Math.floor(Math.random()*50);
    squadreInGara[i].punti = randomNum;
    
    randomNum = Math.floor(Math.random()*50);
    squadreInGara[i].falliSubiti = randomNum;
    
    const {nome, falliSubiti} = squadreInGara[i];
    squadreEFalli.push(`${nome} - falli subiti: ${falliSubiti}`);
}

console.log(squadreEFalli);