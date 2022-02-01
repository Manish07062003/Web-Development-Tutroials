document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})
const input = document.querySelector('input')
input.addEventListener('keydown', (e) => console.log(e.code, e.key))
// input.addEventListener('keyup',() => console.log('Keyup'))

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        default:
            console.log('Ignored');
            break;
    }
})