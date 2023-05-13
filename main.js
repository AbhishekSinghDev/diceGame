function randomNumber() {
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*6) + 1;
    return randomNumber
}

function diceThrow() {
    let moveValue = randomNumber();
    return moveValue;
}

function winnerHeadingText(p1, p2) {
    let heading = document.getElementById("heading");
    if(p1 > p2) {
        heading.classList.add("heading-winner");
        heading.style.color = "lightgreen";
        heading.textContent = "Player 1 Wins";
    }
    else if(p2 > p1) {
        heading.classList.add("heading-winner");
        heading.style.color = "lightgreen";
        heading.textContent = "Player 2 Wins"
    }
    else {
        heading.classList.add("heading-winner");
        heading.style.color = "grey";
        heading.textContent = "Draw";
    }
}

let player_1 = diceThrow();
let player_2 = diceThrow();

// ladder for checking who wins
winnerHeadingText(player_1, player_2);
let left_dots = document.getElementsByClassName("l-dots");
let right_dots = document.getElementsByClassName("r-dots");

for(let i=0; i<(6-player_1); i++) {
    left_dots[i].classList.add("invisible-dots");
}
for(let i=0; i<(6-player_2); i++) {
    right_dots[i].classList.add("invisible-dots");
}