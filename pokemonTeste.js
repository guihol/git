///https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector("#container");

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 1000; i++) {
    const newImg = document.createElement('img');
    const poke = document.createElement("div");
    const label = document.createElement("span");
    container.classList.add("pokemon")
    label.innerText = `#${i}`;
    newImg.src = `${baseURL}${i}.png`;
    poke.appendChild(newImg);
    poke.appendChild(label);
    container.appendChild(poke)


}