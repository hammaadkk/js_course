// function AddTwoNumbers(no1, no2){
//     console.log(no1+no2);
// }

// AddTwoNumbers(3, 5);

// function AddTwoNumbers(no1, no2){
//     let result = no1 + no2;
//     return result

//     // note
//     // nothing will print after the return
// }

// const result = AddTwoNumbers(3, 5);
// console.log("Result is " + result);

const user = {
    Username: "Hammaad",
    UserId: 345
}

function LoggedInUserMsg(LoggedInUser){
    console.log(`${LoggedInUser.Username} just logged in with Id ${LoggedInUser.UserId}`);
}

LoggedInUserMsg(user)