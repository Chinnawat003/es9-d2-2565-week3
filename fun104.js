//Rest parameters
//Decalaration function
function show(a,...args){
    return `${a} ${args[1] + args[2] +args[3]}`
}

//Call Function
let sum = show(10,20,30,40,50,60,70,80,90,100)
console.log(sum)