// // Step 1: Store the data

// let customerName = "John Doe";
// let accountBalance = 1000000;
// let customerPin = 1234;
// let withdrawalAmount = 500000;

// // Step 2: Check the PIN first and display the account balance if the PIN is correct
// if (customerPin === 1234) {
//   console.log(
//     `Welcome ${customerName}! Your account balance is $${accountBalance}.`,
//   );

//   // if the PIN is incorrect, display an error message
// } else if (customerPin !== 1234) {
//   console.log("Incorrect PIN. Please try again.");
// } else {
//   console.log("Invalid input. Please enter a valid PIN.");
// }

// // Step 3: Check if the customer is eligible for withdrawal based on the PIN and account balance
// if (customerPin === 1234 && accountBalance >= withdrawalAmount) {
//   console.log("You are eligible for withdrawal.");
//   accountBalance -= withdrawalAmount;
//   console.log(`Your new account balance is $${accountBalance}.`);
// } else if (
//   customerPin !== 1234 ||
//   accountBalance <= 0 ||
//   accountBalance < withdrawalAmount
// ) {
//   console.log("You are not eligible for withdrawal.");
// } else {
//   console.log("An error occurred. Please try again.");
// }

const greetMe = (userName, dayTime) => {
  // function block

  let customerBalance = 40000;

  let customerPin = "0123";

  let withdrawalAmount = 17500;

  let enteredPin = "0123";

  if (customerPin !== enteredPin) {
    console.log(`Good ${dayTime} ${userName} you have entered a wrong pin`);
  } else if (withdrawalAmount > customerBalance) {
    console.log(`Good ${dayTime}  ${userName} you have an nsufficient fund`);
  } else {
    let remainingBalance = customerBalance - withdrawalAmount;
    console.log(
      ` Good ${dayTime} ${userName} your transaction  issuccessful , the available balance is : ${remainingBalance}`,
    );
  }
};

// To call or invokev the function,We cal the function nameg

greetMe("Lukmon", "afternoon", 6000);
