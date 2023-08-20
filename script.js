const CIRCLE_RADIUS = 11;
const BOARD_WIDTH = 500;
const BOARD_HEIGHT = 500;

const svgBoard = document.getElementById("board");
function placeCircle(x, y, color, circleClass) {

    let randomId = Math.floor(Math.random() * (10000 - 0)) + 0;
    svgBoard.innerHTML += `<circle class="circle ${circleClass}" id="${randomId}" cx="${x}" cy="${y}" r="${CIRCLE_RADIUS}" fill="${color}" />`

    return randomId;
}


// Initialing points.

let points = {
    p1: { x: 10, y: 10 },
    p2: { x: BOARD_WIDTH / 2, y: 10 },
    p3: { x: BOARD_WIDTH, y: 10 },
    p4: { x: 10, y: BOARD_HEIGHT / 2 },
    p5: { x: BOARD_WIDTH / 2, y: BOARD_HEIGHT / 2 },
    p6: { x: BOARD_WIDTH, y: BOARD_HEIGHT / 2 },
    p7: { x: 10, y: BOARD_HEIGHT },
    p8: { x: BOARD_WIDTH / 2, y: BOARD_HEIGHT },
    p9: { x: BOARD_WIDTH, y: BOARD_HEIGHT },
}

for (let point in points) {
    placeCircle(points[point].x, points[point].y, "gray", "placeholder-circle");
}

// Game
const players = {
    p1: { name: "player1", color: "blue", circlePos: [] },
    p2: { name: "player2", color: "red", circlePos: [] }
};
const winningCombos = [
    [points.p1, points.p2, points.p3],
    [points.p1, points.p5, points.p9],
    [points.p1, points.p4, points.p7],
    [points.p4, points.p5, points.p6],
    [points.p7, points.p8, points.p9],
    [points.p2, points.p5, points.p8],
    [points.p3, points.p5, points.p7],
    [points.p3, points.p6, points.p9]
]

const getCurrentPlayer = (p) => { return (players.p1 === p) ? players.p2 : players.p1 }

// For placing users' circle
const placeholderCircle = document.querySelectorAll(".placeholder-circle");

let currentPlayer = getCurrentPlayer(players.p2);


function handleClick(circle) {

    let x = circle.getAttribute("cx");
    let y = circle.getAttribute("cy");

    placeCircle(x, y, currentPlayer.color, 'user-circle');
    currentPlayer.circlePos.push({ x: x, y: y })
    currentPlayer = getCurrentPlayer(currentPlayer);

}


function checkWin(playerPoses) {
    // TODO
}

const board = document.getElementById("board");

board.onclick = (e) => {

    let circle = e.target;

    if (circle.classList.contains("placeholder-circle") && (players.p1.circlePos.length + players.p2.circlePos.length) < 6) {
        handleClick(circle);
    }

    if (circle.classList.contains("circle") && (players.p1.circlePos.length === 3 || players.p2.circlePos.length === 3)) {

        // Handling winning.
        // TODO

    }
}