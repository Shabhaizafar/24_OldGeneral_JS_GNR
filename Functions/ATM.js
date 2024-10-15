
// 1. **Question about PIN Entry**: 
//    - "What is your 4-digit PIN?"

// 2. **Question about Withdrawal Amount**: 
//    - "How much money would you like to withdraw?"

// 3. **Confirmation for Withdrawal**: 
//    - "You are attempting to withdraw $[amount]. Do you want to proceed?"

// 4. **Insufficient Funds Warning**: 
//    - "You have insufficient funds for this withdrawal. Would you like to try a different amount?"

// 5. **Success Notification**: 
//    - "Your withdrawal was successful! Your new balance is $[balance]. Would you like to make another transaction?"

// 6. **Incorrect PIN Notification**: 
//    - "The PIN entered is incorrect. Would you like to try again?"

// 7. **Transaction Cancellation**: 
//    - "You have chosen to cancel the transaction. Would you like to exit the ATM?"


var upin = +prompt("Enter Your Pin Number : ");
var balance = 10000;
var amount;
if(upin==1234){
    var choice = +prompt("1) Withdraw \n2) Deposite\n\nEnter Your Choice :");
    switch(choice){
        case 1 : 
                amount = + prompt("How much money would you like to withdraw?");
                var Confirmation = confirm(`You are attempting to withdraw ${amount}. Do you want to proceed?`);
                if(Confirmation==true){
                    var Confirmation2 = confirm(`Your withdrawal was successful! Your new balance is ${balance-amount}. Would you like to make another transaction?`);
                    console.log(Confirmation2);
                }else{
                   var Confirmation2 = confirm("You have chosen to cancel the transaction. Would you like to exit the ATM?");
                    console.log(Confirmation2);
                }
                 break;
        case 2 : console.log("Deposit");
                 break;
        default : console.log("Wrong Choice!!");
    }
}
else{
    console.log("Wrong");
}
