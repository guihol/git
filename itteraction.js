const btn = document.querySelector("#v2");



btn.onclick = function () {
    console.log("ninja");
    console.log("ninja 2")
}



function scream() {
    console.log("aaaaaa");
    console.log("mete o pé crl")
}

btn.onmouseenter = scream;



const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", function () {
    alert('click')
});



const btn1 = document.querySelector("#v1")
const btn2 = document.querySelector("#v3")

function hello() {
    console.log("hello");
}

function goodbye() {
    console.log("goodbye");
}

btn1.addEventListener("click", hello);
btn2.addEventListener("click", goodbye);


