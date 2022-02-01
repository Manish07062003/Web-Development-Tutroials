let h1 = document.querySelector('h1')
h1.parentElement.classList.add('alignment')
const btn = document.querySelector('button');
btn.addEventListener('click',() => {
    const newcolor=randomColor();
    h1.innerText = newcolor;
    btn.parentElement.style.backgroundColor = newcolor; 
})
const randomColor=()=>{
    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 255);
    let randomNum3 = Math.floor(Math.random() * 255);
    return `rgb(${randomNum1},${randomNum2},${randomNum3})`
} 