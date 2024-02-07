//stack 

// stack is actually used with primitive datatypes like string numbers boolean
// Stack gives us the copy of a value not the orignal thing
// Example


let user1account = "anyuser1@gmail.com";

let user2account = user1account;

user2account="user2@gmail.com";

console.log(user1account);
console.log(user2account);

// Heap

// Heap us used with non primitive datatypes it is objects arrays functions
// heap gives us the original value means if we change in the value it orginal value will also change means it give not the copy but reference
// Example

let User1 ={
    Email :"user1@gmail.com"
}

let User2 = User1;

User2 = {
    Email:"user2@gmailcom"
}

console.log(User1);
console.log(User2);
