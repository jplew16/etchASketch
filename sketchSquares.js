function makeSquares(squaresPerSide = 16) {
    let squareWidth = (100 / squaresPerSide);
    let squareHeight = (100 / squaresPerSide);

    deleteSquares(squaresPerSide);
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        square.classList.toggle('unfilled');
        square.style.width = squareWidth + '%';
        square.style.height = squareHeight + '%';
        parentDiv.appendChild(square);
        square.addEventListener('mouseover', fillSquares);
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
askUser.textContent = 'Adjust Squares';
document.body.appendChild(askUser);

const parentDiv = document.createElement('div');
parentDiv.setAttribute('id', 'parent-div');
document.body.appendChild(parentDiv);
let makeRandomColors = () => {
return `rbg(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`
}
let randomColors = [0,0,0];
let fillSquares = (event) => {
    for (let i = 0; i < 3; i++) {
        randomColors[i] = (Math.floor(Math.random() * 255));
    }
    event.target.style.backgroundColor = `rgb(${randomColors[0]} ${randomColors[1]} ${randomColors[2]})`;
}
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

