const background = document.querySelector("#background")
const body = document.querySelector("body")
const code = document.querySelector("#code")
const button = document.querySelector("#button")

background.addEventListener("click",() => {
    changebackgroundcolor();
});


function changebackgroundcolor({

    const randomnum = Math.floor(Math.random() * (256) * (256) * (256))
    const randomcolor = "#" + randomnum.toString(16);
    console.log(randomcolor);
    body.style.backgroundColor = randomcolor;
    code.innerHTML = randomcolor;
})