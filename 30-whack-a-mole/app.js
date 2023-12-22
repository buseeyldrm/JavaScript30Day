const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const Info = document.querySelector('.button2-54');
const infoScore = document.querySelector('.scoreInformation');
const gameScore = document.querySelector('.gameScore span');
const maxsimumScore = document.querySelector('.maxScore span');
let lastHole;
let timeUp = false;
let score = 0;
let Scores = [];


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log(' same ');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;

    peep();
    //Belirli süre sonra oyunun bitmesi:
    // setTimeout(() => timeUp = true, 10000);
    // console.log('click');
    infoScore.style.top = '-1000px';


}
function finishGame() {
    scoreBoard.textContent = score;
    timeUp = true;


    scoreInfo();
    // maxScore=Math.max(Scores);
}
function scoreInfo() {
    infoScore.style.top = 'calc(50% - 100px)';

    Scores.push(score);
    Scores.sort(function (a, b) {
        return b - a
    }
    );
    console.log("en büyük sayı: " + Scores[0]);

    gameScore.innerHTML = score;
    maxsimumScore.innerHTML = Scores[0];
}


function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
