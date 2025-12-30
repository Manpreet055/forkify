let boxes = document.querySelectorAll('.box');
let resetbtn = document.getElementById('reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.textContent = "X";
            turnX = false;
        }
        else {
            box.textContent = "O";
            turnX = true;
        }
        box.disabled = true
        checkWinner();
    })
})

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            disabledBoxes();
            showWinner(pos1);
            resetbtn.classList.add("hide");
            return;
        }
    }

    // Draw check
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        msg.innerText = "OOPs! The game is draw.";
        msgContainer.classList.remove("hide");
        resetbtn.classList.add("hide");
    }
};
    

function showWinner(winner) {
    msg.innerText = `Congratulations! Winner is ${winner}`
    msgContainer.classList.remove("hide")
}

function resetGame() {
    enabledBoxes()
    turnX = true;
    msgContainer.classList.add("hide")
    resetbtn.classList.remove("hide")
}