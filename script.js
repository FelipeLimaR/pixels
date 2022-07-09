const black = document.querySelector('.color-1')
black.classList.add('color-1')
black.classList.add('selected');

const purple = document.querySelector('.color-2')
purple.classList.add('color-2')

const blueViolet = document.querySelector('.color-3')
blueViolet.classList.add('color-3')

const brown = document.querySelector('.color-4')
brown.classList.add('color-4')

const board = document.querySelector('#pixel-board')

function pickColor (event) {
    const selecionada = document.querySelector('.selected')
    selecionada.classList.remove('selected')
    event.target.classList.add('selected')
}

function changeColor(cor) {
    const teste = document.querySelector('.selected')
    const colorChanged = window.getComputedStyle(teste).getPropertyValue('background-Color');
    
    if ( cor.target.classList.contains('pixel')) {
        cor.target.style.backgroundColor = colorChanged
    }
}

board.addEventListener ('click', changeColor);

black.addEventListener('click', pickColor)
purple.addEventListener('click', pickColor)
blueViolet.addEventListener('click', pickColor)
brown.addEventListener('click', pickColor)

function clearBoard() {
    const limpar = document.querySelectorAll('.pixel')
    for (let i = 0; i < limpar.length; i += 1) {
        limpar[i].style.backgroundColor = 'white'
    }
}

function changeSize() {
    const colorSquare = document.querySelectorAll('.pixel');
    
    let input = document.querySelector('#board-size')
    let numero = input.value
    numero *= numero

    if(numero === '' || numero === 0) {
        window.alert('Board inválido!')
    } else {
        for (let i = 0; i < colorSquare.length; i += 1) {
            board.style.width = numero+'px'
            board.style.height = numero+'px'
        }
    }
   clearBoard()
}