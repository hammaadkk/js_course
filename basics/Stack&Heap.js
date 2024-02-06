// Stack

// In stack it basically in the primitive datatypes like Boolean, number string etc 

// and in stack it gives us the copy of a variable not the original variable so due to which the original value doesnot change 
// Example

// let User1Email = "User1@gmail.com";

// let User2Email = User1Email;
// console.log(User2Email);
// this gives us User1@gmail.com this output but

// User2Email = "Hammaadk123443@gmail.com";
// console.log(User2Email);    //output Hammaadk123443@gmail.com
// console.log(User1Email);    //User1@gmail.com


// Heap 

// In heap it is basically in the non primitive datatypes like array, objects and function 
// and in heap it gives us the original of a variable means reference to the variable and if we change the variable the orignal value will also change 

// Example

let User1 = {
    Email: "user1@gmail.com"
}

let User2 = User1

User2.Email = "User2@gmail.com"

console.log(User2);
console.log(User1);

// output for both user1 and user2 will be same 
