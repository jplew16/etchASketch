function makeSquares(squaresPerSide = 16) {
    let squareWidth = (950 / squaresPerSide) - 4;
    let squareHeight = (800 / squaresPerSide) - 4;
    console.log(`${squareHeight} ${squareWidth}`);
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        square.classList.toggle('unfilled');
        square.style.width = squareWidth + 'px';
        square.style.height = squareHeight + 'px';
        parentDiv.appendChild(square);
    }
}

let squares = document.querySelectorAll('div.unfilled');
squares.forEach((hover) => {
    hover.addEventListener('mouseover', () => {
        hover.target.style.background = 'red';
});
});


const askUser = document.createElement('button');
askUser.setAttribute('id', 'ask-user');
askUser.textContent = 'Set the Number of Squares per Side';
document.body.appendChild(askUser);

const parentDiv = document.createElement('div');
parentDiv.setAttribute('id', 'parent-div');
document.body.appendChild(parentDiv);
makeSquares();
