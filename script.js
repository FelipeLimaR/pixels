const colorDefault = document.querySelector('#color-1');
colorDefault.classList.add('selected');
const paint = document.getElementById('pixel-board');


const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');
const color5 = document.querySelector('#color-5');

function changeColor(event) {
    // event.target.classList.add('selected');
    event.target.classList.add('blackGround')
}

paint.addEventListener('click', changeColor);


function colorSelected(event) {
    const change = document.querySelector('.selected');
    change.classList.remove('selected')
    event.target.classList.add('selected');
}

color1.addEventListener('click', colorSelected)
color2.addEventListener('click', colorSelected)
color3.addEventListener('click', colorSelected)
color4.addEventListener('click', colorSelected)


// Os pixels dentro do quadro não devem ter a classe `selected` quando são clicados.