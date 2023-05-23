function makeSquares(side) {
    const total = side * side;
    const html = [];
    for(let i=0; i < total; i++) {
        html.push('<div class="square"></div>')
    };
    return html.join('');
}


const container = document.querySelector('.container');
container.innerHTML = makeSquares(16);

const squares = container.querySelectorAll('.square');

function changeColor() {
    if (!this.classList.contains('black')) {
        this.classList.add('black');
    }
}

squares.forEach(square => square.addEventListener('mouseover', changeColor))

const button = document.querySelector('button');

function changeSchema() {
    const size = parseInt(prompt('How many squares?'));
    sideSquare = (400 / size) -2;
    document.documentElement.style.setProperty('--side-square', sideSquare + 'px');
    container.innerHTML = makeSquares(size);

    const squares = container.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', changeColor))
}

button.addEventListener('click', changeSchema)