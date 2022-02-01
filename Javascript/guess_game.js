let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum=Math.floor((Math.random() * maximum)+1);
console.log(targetNum);
let guess=parseInt(prompt("Enter your guess"));
let attempts=1;
while(parseInt(guess)!== targetNum){
    if(guess=='q') break;
    if(guess > targetNum){
        guess=(prompt("Too high: Enter a new guess"));
    }
    else{
        guess=(prompt("Too low: Enter a new guess"));
    }
    attempts++;
}
console.log(`You got it!!!! It took you ${attempts} attempts to guess the correct number`);