 // ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM



function insertTheCard(enterThePin){
    setTimeout(()=>{
        console.log("Processing");
        enterThePin(WithdrawMoney);
    }, 5000);
}

function enterThePin(WithdrawMoney){
    setTimeout(()=>{
        console.log("XXXX2344");
        WithdrawMoney(collectCase);
    }, 2000);
}

function WithdrawMoney(collectCase){
    setTimeout(()=>{ 
        console.log("your money is withdrawing");
        collectCase(leaveATM);
    }, 5000);
}

function collectCase(leaveATM){
    setTimeout(()=>{
        console.log("Collect the money");
        leaveATM();
    }, 1000);
}

function leaveATM(){
    console.log("Leave the ATM");
}

function visitingATM(){
    console.log("Entering the ATM");
    console.log("Insert the Card");
    insertTheCard(enterThePin);
}

visitingATM();
