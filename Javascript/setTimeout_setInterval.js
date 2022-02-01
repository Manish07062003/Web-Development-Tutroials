// setTimeout
// console.log("Hello!!")
// setTimeout(()=> {
//     console.log(".....are you still there")
// },5000)
// console.log("Good bye.")

// setInterval
// it return an id of the interval to stop the interval
// setInterval(()=>{
//     console.log(Math.random())
// },3330)

// to stop the intervals we use clearInterval(id)
const id=setInterval(()=>{
    console.log(Math.random())
},2000)

// clearInterval(id)