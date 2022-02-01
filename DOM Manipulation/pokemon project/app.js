const container = document.querySelector('.container');
for (let i = 1; i <= 200; i++) {
    const pokemon=document.createElement('div');
    pokemon.classList.add('pokemon');
    const label=document.createElement('span');
    label.innerText=i;
    const img=document.createElement('img');
    img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` 
    pokemon.append(img,label)
    container.appendChild(pokemon)
}