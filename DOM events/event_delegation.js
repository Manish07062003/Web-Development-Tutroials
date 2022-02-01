const form = document.querySelector('form');
const input=document.querySelector('#catsname');
const list=document.querySelector('#cats');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi=document.createElement('li');
    newLi.innerText=input.value;
    list.append(newLi);
    input.value='';
});
// const lis=document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click',()=>{
//         li.classList.add('hide'); //this only work for the li's which are present in the html document
//     })
// }

const ul=document.querySelector('ul');
ul.addEventListener('click',(e)=>{
    e.target.remove();
})