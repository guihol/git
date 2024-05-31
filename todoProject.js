/* let action = prompt("what would you like to do?");
const lista = [];
let i = 0;

while (action !== "quit") {

    if (action === "new") {
        i = prompt("digite uma ação");
        lista.push(i);
        console.log(`${i} adicionado a lista`);

        action = prompt("what would you like to do?");
    }
    else if (action === "list") {
        console.log("*********************")
        for (let k = 0; k < lista.length; k++) {
            console.log(`${k}:${lista[k]}`);
        }
        console.log("*********************")
        action = prompt("what would you like to do?");
    }
    else if (action === "delete") {
        let del = parseInt(prompt("informe o indice que deseja deletar"));
        if (!Number.isNaN(del)) {
            lista.splice(del, 1);
            console.log("ação removida da lista")
            action = prompt("what would you like to do?");
        } else {
            action = prompt("indice errado, what would you like to do?");
        }

    } else {
        action = prompt("digite um comando valido  1");
    }

}

console.log("voce quitou");


function sum(x, y) {
    let soma = x + y;
    return soma;
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
} */

const square = {
    area(side) {
        return side * side * side * side
    },
    perimeter(side) {
        return side * 4
    }
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1
        return "EGG"
    }
}

































