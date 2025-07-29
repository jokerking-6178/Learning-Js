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

//console.log(loginUserMessage("shub"))
//console.log(loginUserMessage("nill"))

function calculatePrice(... num1){
    return num1;
}

//console.log(calculatePrice(100,200,300))

user = {
    username : "shubh" ,
    age : 20
}

function handleObject(anyobject){
    console.log(`name is ${anyobject.username} and age is ${anyobject.age}`)
}

//handleObject(user)