let random = Math.random()
if (random > 0.5) {
    console.log(random);
    console.log("seu numero é maior q 0.5")
}
else if (random < 0.5) {
    console.log(random);
    console.log("seu numero é menor q 0.5")
}


const dayOfWeek1 = prompt("digite um dia da semana em ingles")

let dayOfWeek = dayOfWeek1.toLowerCase();

dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);

console.log(dayOfWeek);

if (dayOfWeek === "monday") {
    console.log("eu odeio segunda-feira")
}
else if (dayOfWeek === "saturday") {
    console.log("lancha tudo")
}



const age = 65;

if (age < 5) {
    console.log("free")
}
else if (age < 10) {
    console.log("R$ 10")
}
else if (age < 65) {
    console.log("RS 20")
}
else {
    console.log("mt velho")
}



function getColor(phrase) {
    if (phrase === "stop") {
        console.log("red");
    }
    else if (phrase === "slow") {
        console.log("yellow");
    }
    else if (phrase === "go") {
        console.log("green");
    }
    else {
        console.log("purple");
    }
}



const password = prompt("digite uma senha: ")

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("senha valida")
    }
    else {
        console.log("senha com espaço")
    }
}
else {
    console.log("senha muito curta")
}


const mystery = 'P12345689'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}


let firstName = prompt("digite seu nome")

while (!firstName) {
    firstName = prompt("tente dnv")
}


const days = 123;

switch (days) {
    case 1:
        console.log("um");
        break;
    case 2:
        console.log("dois");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("quatro");
        break;
    case 5:
        console.log("cinco");
        break;
    case 6:
        console.log("seis");
        break;
    case 7:
        console.log("sete");
        break;
    default:
        console.log("sem numero");
}


let day = ["segunda", "terça", "quarta"];



const person = {
    firstName: "mick",
    lastName: "jagger",
    true: "hue"
};


console.log("ninja")

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
















