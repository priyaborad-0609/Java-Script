const btn = document.querySelector("#btn");
const body = document.querySelector("body");
let print = document.querySelector("#colorcode");
const copy = document.querySelector("#copybtn");

btn.addEventListener("click",() => {
    changebackgroundcolor();
});


function changebackgroundcolor(){

    const random = Math.floor(Math.random()*16777216);
    const random_color = "#" + random.toString(16);
    console.log(random_color);
    body.style.backgroundColor = random_color;
    colorcode.innerHTML = random_color;
}

copybtn.addEventListener("click",() => {
    copycode();
});

function copycode(){
    copybtn.innerHTML = 'Copied!';
}