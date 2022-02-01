const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const resetbtn = document.querySelector('#resetbtn')
const p1display = document.querySelector('#p1Display')
const p2display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#playto')
let p1score = 0, p2score = 0;
let winningscore = 3;
let gameOver = false;

p1btn.addEventListener('click', () => {
    if (!gameOver) {
        p1score++;
        if (p1score === winningscore) {
            gameOver = true;
            p1display.classList.toggle('winner')
            p2display.classList.toggle('loser')
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1display.textContent = p1score;
    }
})
p2btn.addEventListener('click', () => {
    if (!gameOver) {
        p2score++;
        if (p2score === winningscore) {
            gameOver = true;
            p2display.classList.toggle('winner')
            p1display.classList.toggle('loser')
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2display.textContent = p2score;
    }
})

winningScoreSelect.addEventListener('change', () => {
    winningscore = parseInt(winningScoreSelect.value);
    reset();
})

resetbtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1score = 0;
    p1display.textContent = p1score;
    p2score = 0;
    p2display.textContent = p2score;
    p2display.classList.remove('winner', 'loser')
    p1display.classList.remove('loser', 'winner')
    p1btn.disabled = false;
    p2btn.disabled = false;
}