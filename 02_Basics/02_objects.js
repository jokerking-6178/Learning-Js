// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "demo",
    "full name": "demo garg",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "fjdsfjsdh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "zyx@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zyx@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//JsUser.greeting();
//JsUser.greetingTwo();

const user = {}

user.id = "1234"
user.name = "hello"

const regularUser = {
    email : " xyz@gmia.com",
    fullname : {
        userfullname : {
            firstname : "shubh",
            lastname : "garg"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:23 , 2 : 24}
const obj2 = {3 : 25 , 4 : 26}
// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({} , obj1 , obj2)
//console.log(obj3)

//console.log(Object.keys(regularUser))

const course = {
    name : "js " , 
    price : "234" , 
    teacher : "hitesh"
}

const {teacher : teach } = course
console.log(teach)