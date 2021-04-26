function makeSquares(squaresPerSide = 16) {
    let squareWidth = (950 / squaresPerSide) - 4;
    let squareHeight = (800 / squaresPerSide) - 4;

    deleteSquares(squaresPerSide);
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        square.classList.toggle('unfilled');
        square.style.width = squareWidth + 'px';
        square.style.height = squareHeight + 'px';
        parentDiv.appendChild(square);
    }
}
function deleteSquares() {
    let squares = document.querySelectorAll('div.unfilled');
    if (parentDiv.hasChildNodes) {
        for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
    return;
}
}
const askUser = document.createElement('button');
askUser.setAttribute('id', 'ask-user');
askUser.textContent = 'Set the Number of Squares per Side';
document.body.appendChild(askUser);

const parentDiv = document.createElement('div');
parentDiv.setAttribute('id', 'parent-div');
document.body.appendChild(parentDiv);
makeSquares();
    let userChoice = document.getElementById('ask-user');
    userChoice.addEventListener('click', () => {
        let userNum;
        do {
            userNum = prompt('How many squares per row and column?', 0);
        }
        while (userNum > 100 && userNum)
        makeSquares(userNum);
    });
    parentDiv.onmouseover = hover;
function hover(event) {
    if (event.type == 'mouseover') {
        event.target.style.backgroundColor = '#b10d0d';   
    }
}

