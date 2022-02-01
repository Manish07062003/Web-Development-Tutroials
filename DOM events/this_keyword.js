const randomColor = () => {
    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 255);
    let randomNum3 = Math.floor(Math.random() * 255);
    return `rgb(${randomNum1},${randomNum2},${randomNum3})`
}
const btns = document.querySelectorAll('button');
for(let btn of btns){
    btn.addEventListener('click',colorize)
}
const h1s = document.querySelectorAll('h1')
for(let h1 of h1s){
    h1.addEventListener('click',colorize)
}
function colorize() {
    this.style.backgroundColor=randomColor()
    this.style.color=randomColor()
}