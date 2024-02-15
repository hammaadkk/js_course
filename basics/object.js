// const HelpDesk = new Object();    //singleton object

const jsUser = {
    name: "Hammaad",
    age: 23,
    location: "mardan",
    email: "hammaadk1232gmail.com"
}

console.log(jsUser.email);

console.log(jsUser["email"]);   //2nd method to access object

jsUser.greeting = function(){
    console.log("Welcome js code");
}

console.log(jsUser.greeting());
// objects combining
const obj1 = {
    1: "a",
    2: "b"
    }

const obj2 = {
        3: "c",
        4: "d"
        }  
        
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);