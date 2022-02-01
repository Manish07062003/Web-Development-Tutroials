const btn=document.querySelector('#v2');
btn.onclick=() => {
    console.log('You clicked me');
    console.log('I hope it worked');
}
scream = () => {
    console.log("AAAAHHHHH");
    console.log("STOP TOUCHING ME");
} 
btn.onmouseenter=scream;

const btn1=document.querySelector('#v3');
btn1.addEventListener('mousedown',()=> alert("half clicked")); //for different event search in MDN

const twist=() => console.log("TWIST")
const shout=() => console.log("SHOUT")
const tasBtn=document.querySelector('#tas')
// tasBtn.onclick=shout //these both don't work the last one will be considered
// tasBtn.onclick=twist
tasBtn.addEventListener('click',twist,{once: true})// twist works only once for different arguements search in MDN 
tasBtn.addEventListener('click',shout)//these both work
