const button=document.querySelector('#mybtn');
const container=document.querySelector('div');
const rgb=() => {
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
};
button.addEventListener('click',(e)=>{
    container.style.backgroundColor=rgb();
    container.style.color=rgb();
    e.stopPropagation()
});
container.addEventListener('click',()=>{
    container.classList.add('hide')
})