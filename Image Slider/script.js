// Alternative minimal version
let current = 0;
const imgs = document.querySelectorAll('.slider_container img');

function show(n) {
    imgs.forEach(img => img.style.display = 'none');
    imgs[n].style.display = 'block';
}

document.getElementById('btn2').onclick = () => {
    current = (current + 1) % imgs.length;
    show(current);
};

document.getElementById('btn1').onclick = () => {
    current = (current - 1 + imgs.length) % imgs.length;
    show(current);
};

show(0);