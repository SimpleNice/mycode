function Checking(amount){
    this.balance = amount;
    this.deposit = deposit; //方法
    this.withdraw = withdraw; //方法
    this.toString = toString; //方法
}
function deposit(amount){
    this.balance += amount;
}
function withdraw(amount){
    if(amount<=this.balance){
        this.balance-=amount;
        return true;
    }
    if(amount>this.balance){
        return false;
    }
}

function toString(){
    return "余额: "+this.balance;  
}

// var account = new Checking(500);
// account.deposit(1000);
// console.log(account.toString());
// account.withdraw(750);
// console.log(account.toString());
// account.withdraw(800);
// console.log(account.toString());
