const quadroColorir = document.getElementById('pixel-board');
let corSelecionada;
const corPreta = document.querySelector('.color-black');
const paletaCor = document.getElementById('color-palette');
const botaoLimpar = document.getElementById('clear-board');
const pixelBoard = document.getElementsByClassName('pixel');
const botaoVqv = document.getElementById('generate-board');

gerandoBoard(5);

botaoVqv.addEventListener('click', function () {
  removePixels();
  const board = document.getElementById('board-size');
  const value = board.value;
  if (value === '') {
    alert('Board inválido!');
  }
  gerandoBoard(value);
})

function removePixels() {
  let pixelRemover = document.querySelectorAll('.pixel');
  for (i = 0; i < pixelRemover.length; i += 1) {
    pixelRemover[i].remove();
  }
}

function gerandoBoard(tamanhoBoard) {
  for (let index = 1; index <= tamanhoBoard * tamanhoBoard; index += 1) {
    if (tamanhoBoard < 5) {
      tamanhoBoard = 5;
    }
    if (tamanhoBoard > 50) {
      tamanhoBoard = 50;
    }
    const pixelColorir = document.createElement('div');
    quadroColorir.appendChild(pixelColorir);
    pixelColorir.className = 'pixel';
    if (index % tamanhoBoard === 0) {
      const quebraDeLinha = document.createElement('br');
      quadroColorir.appendChild(quebraDeLinha);
    }
  }
}

function selecionadaInicial() {
  corSelecionada = corPreta;
  corSelecionada.classList.add('selected');
}


function selecionaCor(param1) {
  param1.addEventListener('click', function (event) {
    corSelecionada.classList.remove('selected');
    corSelecionada = event.target;
    corSelecionada.classList.add('selected');
  })
};

function colorir(param) {
  selecionaCor(paletaCor)
  param.addEventListener('click', function (event) {
    let novaCorpixel = getComputedStyle(corSelecionada).backgroundColor;
    event.target.style.backgroundColor = novaCorpixel;
  })
};

colorir(quadroColorir);

function limparBoard() {
  botaoLimpar.addEventListener('click', function () {
    for (index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  })
}

limparBoard();

window.onload = selecionadaInicial;

