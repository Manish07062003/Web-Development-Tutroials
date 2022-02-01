const todolist=['Read financial books','Complete one section of web development'];
let userChoice=prompt('What would you like to do');
while(userChoice!='quit'){
    if(userChoice==='new'){
        let newtodo=prompt("Enter new TODO");
        todolist.push(newtodo);
        console.log(`${newtodo} added to the list`);
    }
    else if(userChoice==='list'){
        console.log('*********');
        for(let i=0; i<todolist.length; i++){
            console.log(`${i}: ${todolist[i]}`)
        }
        console.log('*********');
    }
    else if(userChoice==='delete'){
        let delIndex=prompt('Enter the index to be deleted');
        todolist.splice(delIndex,1);
    }
    userChoice=prompt('What would you like to do');
}
console.log('You quit the app');