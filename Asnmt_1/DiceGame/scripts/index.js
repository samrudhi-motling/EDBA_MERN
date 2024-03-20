let firstPlayerName= ""
let secondPlayerName= ""

let firstPlayerScore= 0
let secondPlayerScore= 0

let totalScore= 0

function onSubmit(event){
    event.preventDefault() 
    // to avoid the page being reloaded on pressing submit
    const formData = document.getElementsByTagName("input")
    // to get elements from DOM. you can use by id, by class, by ag name. id is unique
    firstPlayerName = formData[0].value
    secondPlayerName = formData[1].value
    totalScore = formData[2].value

    document.getElementById("form-container").style.display = "none"
    document.getElementById("board-container").style.display= "block"
    // getElementById gives the very first element of the id
    // getElementsById is different (SEE WHY) so you give index as in [0]
    document.getElementById("player1").getElementsByClassName("heading")[0].innerHTML= firstPlayerName
    document.getElementById("player2").getElementsByClassName("heading")[0].innerHTML= secondPlayerName
    // WHATS innerhtml
}

function rollDice(playerIndex) {
    const randomNumber = getRandomNumber()
    const playerNodes = document.getElementById(`player${playerIndex}`)
    playerNodes.querySelector(".dice img").setAttribute("src", `../images/dice${randomNumber}.png`)
    switch(playerIndex) {
        case 1:
            firstPlayerScore += randomNumber
            playerNodes.getElementsByClassName("score")[0].innerHTML = firstPlayerScore
            playerNodes.getElementsByTagName("input")[0].setAttribute("disabled", true)
            document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled")
            break
        case 2:
            secondPlayerScore += randomNumber
            playerNodes.getElementsByClassName("score")[0].innerHTML = secondPlayerScore
            playerNodes.getElementsByTagName("input")[0].setAttribute("disabled", true)
            document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled")
            break
        default:
            break
    }
    checkIfWinnerExists()
}

function getRandomNumber(){
    return Math.floor(Math.random()*6)+1
    //math.floor rounds off to the previous value and math.ceil rounds off to next value. 
    // 5.8--> 5 (floor) 5.8-->6 (ceil)
}

function checkIfWinnerExists() {
    if (firstPlayerScore >= totalScore) {
        document.getElementById("player1").innerHTML += `<div class="winner"></div>`
        document.getElementById("player2").getElementsByTagName("input")[0].setAttribute("disabled", true)
    }

    if (secondPlayerScore >= totalScore) {
        document.getElementById("player2").innerHTML += `<div class="winner"></div>`
        document.getElementById("player1").getElementsByTagName("input")[0].setAttribute("disabled", true)
    }
}
