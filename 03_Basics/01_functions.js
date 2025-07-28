function saymyname(){
    console.log("h")
    console.log("h")
    console.log("h")
    console.log("h")
}

// saymyname()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shub"))
console.log(loginUserMessage("nill"))