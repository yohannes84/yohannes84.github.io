var rudyTimer = (() => {
    return () => {
        timer = null;
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += "Rudy!";
}

window.onload = () => {
    //associating button click event
    

    text = document.getElementById("text");
    btnNewAccount = document.getElementById("btnNewAccount");
    accountNameInput = document.getElementById("accountName");
    depositInput = document.getElementById("deposit");
   
    btnNewAccount.onclick = accountHandler;
    
};

// Module for account creation- second question
var text, accountNameInput, depositInput, btnNewAccount;
var accountInfoList = [];

var createAccount = (accountName, deposit) => {
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': () => {
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};

var accountHandler = () => {
    let newAccount = createAccount(
        accountNameInput.value,
        depositInput.value
    );

    text.value =    text.value + 
                        (accountInfoList.length === 0 ? "": "\n") +
                        newAccount.toString();

    accountInfoList.push(newAccount);
    console.log("Account Info List:", accountInfoList);
};

