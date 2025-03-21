let a = prompt("Enter a: ");
let b = prompt("Enter b: ");

let x = parseInt(a);
let y = parseInt(b) 

const h1 = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

add.addEventListener("click" , () => {
    let sum = a+b;
    h1.innerHTML = sum;
});

sub.addEventListener("click" , () => {
    let sum = a-b;
    h1.innerHTML = sum;
});

mul.addEventListener("click" , () => {
    let sum = a*b;
    h1.innerHTML = sum;
});

div.addEventListener("click" , () => {
    let sum = a/b;
    h1.innerHTML = sum;
});
