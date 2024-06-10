const btnc = document.querySelector("#btn");
const h1 = document.querySelector("h1");
const bdy = document.querySelector("#body");

h1.style.marginLeft = "300px";
btnc.style.marginLeft = "350px";

function changeColor() {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    bdy.style.backgroundColor = newColor;
    h1.innerText = newColor;

    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }

}

btnc.addEventListener('click', changeColor);


