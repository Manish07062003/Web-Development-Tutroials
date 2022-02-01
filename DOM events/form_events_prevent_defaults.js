const form = document.querySelector('form');
const input=document.querySelector('#catsname')
const list=document.querySelector('#cats')
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const newLi=document.createElement('li');
    newLi.innerText=input.value;
    list.append(newLi)
    input.value='';
});