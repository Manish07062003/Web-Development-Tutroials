const allLinks=document.querySelectorAll('a')

for(let link of allLinks)
{
    link.innerText="I am a link"
}
const heading=document.querySelector('h1')
heading.innerHTML='<i>I am Silkie Chicken</i>' // the browser treats this as HTML