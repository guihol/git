
console.log("ninja")

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i1 = 0; i1 <= 20; i1 += 2) {
    if (i1 === 0) {
    }
    else {
        console.log(i1);
    }
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}



for (let i = animal.length - 1; i >= 0; i--)


    for (let i = 0; i < people.length; i = i + 1) {
        let uperCase = people[i]
        console.log(uperCase.toUpperCase());

    }

let count = 0;

while (count < 10) {
    count++;
    console.log(count)


}


let input = prompt("digite alguma coisa");

while (true) {
    input = prompt(input);
    if (input === "stop") {
        break
    }
}
console.log("boa")




let maximum = parseInt(prompt("digite um numero maximo"));

while (!maximum) {
    maximum = parseInt(prompt("digite um numero maximo"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = prompt("tente adivinhar (digite 'q' para sair) ");
let tentativas = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = parseInt(prompt("muito alto, tente dnv"));
        tentativas++;
    }
    else if (guess < targetNum) {
        guess = parseInt(prompt("muito baixo, tente dnv"));
        tentativas++;
    }
    else {
        guess = prompt("invalido, tente um numero");
    }
}

if (guess === "q") {
    console.log("quit");
}
else {
    console.log("ganhou");
    console.log(`seu numero de tentativas foi ${tentativas}`);
}




let saco = ["7belo", "plutonita", "caramelo", "café"]

for (let bala of saco) {
    console.log(bala);
}


