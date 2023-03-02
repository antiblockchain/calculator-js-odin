let winningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var currentPlayer = "O";

let gameBoard = ["", "", "", "", "", "", "", "", ""];

let game = true;

function play(position) {
    if (currentPlayer == "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
    let player = currentPlayer;
    switch (position) {
        case 1:
            gameBoard[0] = player;
            document.getElementById("one").innerHTML = player.toString();
            document.getElementById("one").setAttribute("onclick","");
            break;
        case 2:
            gameBoard[1] = player;
            document.getElementById("two").innerHTML = player.toString();
            document.getElementById("two").setAttribute("onclick","");
            break;
        case 3:
            gameBoard[2] = player;
            document.getElementById("three").innerHTML = player.toString();
            document.getElementById("three").setAttribute("onclick","");
            break;
        case 4:
            gameBoard[3] = player;
            document.getElementById("four").innerHTML = player.toString();
            document.getElementById("four").setAttribute("onclick","");
            break;
        case 5:
            gameBoard[4] = player;
            document.getElementById("five").innerHTML = player.toString();
            document.getElementById("five").setAttribute("onclick","");
            break;
        case 6:
            gameBoard[5] = player;
            document.getElementById("six").innerHTML = player.toString();
            document.getElementById("six").setAttribute("onclick","");
            break;
        case 7:
            gameBoard[6] = player;
            document.getElementById("seven").innerHTML = player.toString();
            document.getElementById("seven").setAttribute("onclick","");
            break;
        case 8:
            gameBoard[7] = player;
            document.getElementById("eight").innerHTML = player.toString();
            document.getElementById("eight").setAttribute("onclick","");
            break;
        case 9:
            gameBoard[8] = player;
            document.getElementById("nine").innerHTML = player.toString();
            document.getElementById("nine").setAttribute("onclick","");
            break;

    }
    checkMove(player);

}

function checkMove(player) {
    let win = false;
    for (let i = 0; i < 8; i++) {
        let winningMove = winningMoves[i];
        let a = gameBoard[winningMove[0]];
        let b = gameBoard[winningMove[1]];
        let c = gameBoard[winningMove[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            win = true;
            break
        }
    }
    if (win) {
        document.getElementById("status").innerHTML = player + " won!"
        game = false;
    }
    if (!gameBoard.includes("")) {
        document.getElementById("status").innerHTML = "Draw"
        game = false;
    }
    if (game == false) {
        document.getElementById("one").setAttribute("onclick","");
        document.getElementById("two").setAttribute("onclick","");
        document.getElementById("three").setAttribute("onclick","");
        document.getElementById("four").setAttribute("onclick","");
        document.getElementById("five").setAttribute("onclick","");
        document.getElementById("six").setAttribute("onclick","");
        document.getElementById("seven").setAttribute("onclick","");
        document.getElementById("eight").setAttribute("onclick","");
        document.getElementById("nine").setAttribute("onclick","");

    }
}
function restart() {
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";

    document.getElementById("one").setAttribute("onclick","play(1)");
    document.getElementById("two").setAttribute("onclick","play(2)");
    document.getElementById("three").setAttribute("onclick","play(3)");
    document.getElementById("four").setAttribute("onclick","play(4)");
    document.getElementById("five").setAttribute("onclick","play(5)");
    document.getElementById("six").setAttribute("onclick","play(6)");
    document.getElementById("seven").setAttribute("onclick","play(7)");
    document.getElementById("eight").setAttribute("onclick","play(8)");
    document.getElementById("nine").setAttribute("onclick","play(9)");
    game = true;
    var currentPlayer = "O";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
}