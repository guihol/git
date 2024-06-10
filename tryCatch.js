
try {
    hello.toUppercase();
} catch (e) {
    console.log("deu merda aqui")
    console.log(e)
}


const titles = movies.map(function (movie) {
    return movie.title;
})


const allEvens = [2, 4, 6, 8]

allEvens.every(nums => nums % 2 === 0)

const allEvens = function (arr) {
    return arr.every(num => num % 2 === 0);
}



const allEvens = arr => arr.every(num => num % 2 === 0)


const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie) {
        return currMovie;
    }
    return bestMovie;
})



const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`

    }
}

const allEvens = arr => arr.every(num => num % 2 === 0)

function allEvens(arr) {
    return arr.every(function (num) {
        return num % 2 === 0;
    });
}



function rollDIe(sides) {
    if (sides === undefined) {
        sides = 6;
    }
    return Math.floor(Math.random() * sides) + 1;

}




