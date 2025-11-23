var player1Name = prompt("What is player 1 name?").toUpperCase()
var player2Name = prompt("What is player 2 name?").toUpperCase()
// var player1Name = "Abdul"
// var player2Name = "Abdul"

var player1NameUI= document.querySelector("#palyer1NameUI") 
var player2NameUI= document.querySelector("#player2NameUI")

player1NameUI.textContent = player1Name
player2NameUI.textContent = player2Name

var gameStatsList = JSON.parse(localStorage.getItem("gameStatsList")) || []

var playerTurn = true

var winningScore = parseFloat(prompt("Enter the winning Score"))
document.querySelector(".winningScore").innerHTML = `Winning Score : ${winningScore}`

var diceImg = document.querySelector(".dice-img img")

var player1CurrentScore =  0
var player2CurrentScore =  0

var player1TotalScore = 0
var player2TotalScore = 0

var player1CurrentScoreUI = document.querySelector(".player1current-scoreUI")
var player2CurrentScoreUI = document.querySelector(".player2current-scoreUI")

var player1TotalScoreUI = document.querySelector(".player1TotalScoreUI")
var player2TotalScoreUI = document.querySelector(".player2TotalScoreUI")

var rollDice = document.querySelector(".rolldice")
var newGame = document.querySelector(".newgame")
var holdDice = document.querySelector(".hold")

player1 = document.querySelector(".child-one")
player2 = document.querySelector(".child-two")

player1.classList.toggle('active')


rollDice.addEventListener("click", function(){
    var diceNumber = Math.ceil(Math.random()*6)
    document.querySelector(".dice-img").style.visibility = "visible";
    diceImg.src = `./Assets/dice${diceNumber}.webp`

    if (diceNumber == 1) {
        player1.classList.toggle('active')
        player2.classList.toggle('active')

        if (playerTurn) {
            player1CurrentScore = 0
            player1CurrentScoreUI.textContent = 0
        }
        else{
            player2CurrentScore = 0
            player2CurrentScoreUI.textContent = 0
        }
        playerTurn = !playerTurn
        return
    }

    if (playerTurn) {
        player1CurrentScore += diceNumber
        player1CurrentScoreUI.innerHTML = player1CurrentScore
    }
    else{
        player2CurrentScore += diceNumber
        player2CurrentScoreUI.innerHTML = player2CurrentScore
    }
})

holdDice.addEventListener("click", function(){
    if (playerTurn) {
        player1TotalScore += player1CurrentScore
        player1TotalScoreUI.innerHTML = player1TotalScore
        player1CurrentScore = 0
        player1CurrentScoreUI.textContent = 0
    
        if (player1TotalScore >= winningScore) {
            alert(`${player1Name} won the match.`)
            gameStatsList.push({
                result: `${player1Name} won the match against ${player2Name}.`,
                time: new Date().toLocaleString()
            });
            localStorage.setItem("gameStatsList", JSON.stringify(gameStatsList))
            player1CurrentScore = 0;
            player2CurrentScore = 0;
            player1CurrentScoreUI.textContent = 0;
            player2CurrentScoreUI.textContent = 0;
        }
    }
    else{
        player2TotalScore += player2CurrentScore
        player2TotalScoreUI.innerHTML = player2TotalScore
        player2CurrentScore = 0
        player2CurrentScoreUI.textContent = 0

        if (player2TotalScore >= winningScore) {
            alert(`${player2Name} won the match.`)
            gameStatsList.push({
                result: `${player2Name} won the match against ${player1Name}.`,
                time: new Date().toLocaleString()
            });
            localStorage.setItem("gameStatsList", JSON.stringify(gameStatsList))
            player2CurrentScore = 0;
            player1CurrentScore = 0;
            player2CurrentScoreUI.textContent = 0;
            player1CurrentScoreUI.textContent = 0;
            }
        }
    playerTurn = !playerTurn
    player1.classList.toggle('active')
    player2.classList.toggle('active')
})

newGame.addEventListener("click", function(){
    player1CurrentScore =  0
    player2CurrentScore =  0
    player1TotalScore =  0
    player2TotalScore =  0
    player1CurrentScoreUI.innerHTML =  0
    player2CurrentScoreUI.innerHTML =  0
    player1TotalScoreUI.innerHTML =  0
    player2TotalScoreUI.innerHTML =  0

    player1Name = prompt(`What is player1 name?`).toUpperCase()
    player2Name = prompt(`What is player2 name?`).toUpperCase()
    player1NameUI.textContent = player1Name
    player2NameUI.textContent = player2Name

    playerTurn = true
    player1.classList.add('active');
    player2.classList.remove('active');
})

document.querySelector(".leaderBoardBtn").addEventListener("click", function(){
    document.querySelector("#leaderBoardModal").classList.toggle("modaloff")
    let leaderBoard = JSON.parse(localStorage.getItem("gameStatsList"))
    document.querySelector("ul").innerHTML = ""
    leaderBoard.forEach((item,index) => {
        const li = document.createElement("li");
    li.innerHTML = `
        <span>${item.result}</span>
        <small>${item.time}</small>
        <button class="deleteBtn">✖</button>
    `;

    li.querySelector(".deleteBtn").addEventListener("click", function () {
        leaderBoard.splice(index, 1);
        localStorage.setItem("gameStatsList", JSON.stringify(leaderBoard));
        this.parentElement.remove();
        });
    document.querySelector("ul").appendChild(li)
    });
})
document.querySelector("#leaderBoardModal").addEventListener("click", function(){
    document.querySelector("#leaderBoardModal").classList.toggle("modaloff")
})
document.querySelector("#modal").addEventListener("click", function (e) {
    e.stopPropagation();
});