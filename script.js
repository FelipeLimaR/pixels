const colorDefault = document.querySelector('#color-1');
colorDefault.classList.add('selected');
const selecionado = document.getElementById('pixel-board');

function changeColor(event) {
    event.target.classList.add('selected');
    console.log("Desgraça");
}

selecionado.addEventListener('click', changeColor)