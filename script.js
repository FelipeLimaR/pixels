// cor 1
const black = document.querySelector('.color-1');
black.classList.add('color-1');
black.classList.add('selected');

// cores aleatórias
const random2 = document.querySelector('.color-2');
random2.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'

const random3 = document.querySelector('.color-3');
random3.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')' 

const random4 = document.querySelector('.color-4');
random4.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')' 


// criar quadro dinamicamente
const board = document.querySelector('#pixel-board');

function createSquare(sizeInput){
    const squareDefault = sizeInput *  50;
    const widtHeight = sizeInput * sizeInput;
    board.style.width = squareDefault + 'px';
    board.style.height = squareDefault + 'px';

    for(let i = 0; i < widtHeight; i += 1) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        board.appendChild(newDiv);
    }
}

createSquare(5);

// pinta com cor padrão
function paint(cor) {
    const change = document.querySelector('.selected');
    const colorChanged = window.getComputedStyle(change).getPropertyValue('background-Color');
    
    if ( cor.target.classList.contains('pixel')) {
        cor.target.style.backgroundColor = colorChanged;
    }
}

// escolhe a cor
function pickColor (event) {
    const selecionada = document.querySelector('.selected');
    selecionada.classList.remove('selected');
    event.target.classList.add('selected');
}

// escutadores de evento
board.addEventListener ('click', paint);
black.addEventListener('click', pickColor);
random2.addEventListener('click', pickColor);
random3.addEventListener('click', pickColor);
random4.addEventListener('click', pickColor);

// limpa quadrados pintados
function clearBoard() {
    const limpar = document.querySelectorAll('.pixel');
    for (let i = 0; i < limpar.length; i += 1) {
        limpar[i].style.backgroundColor = 'white';
    }
}

const input = document.querySelector('#board-size')

// remove quadrados anteriores
function removeSquare() {
    const removeAll = document.querySelectorAll('.pixel');
    for (let i = 0; i < removeAll.length; i += 1) {
        removeAll[i].remove();
    }
}

// altera tamanho do quadro
function changeSize() {
    let number = input.value;
    if (number === '' || number === 0) {
        window.alert('Board inválido!')
    }

    if (number < 5) {
        number = 5;
    }

    if (number > 50) {
        number = 50;
    }
    removeSquare();
    createSquare(number);
    clearBoard()
}