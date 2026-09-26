class BankAccount{
    #balance = 0;
    constructor(owner){
        this.owner = owner;
    }

    setAmount(amount){
        if(amount > 0){
            this.#balance += amount;
        }
    }

    getAmount(){
        return (`Account balance: ${this.#balance}`);
    }
}

const account = new BankAccount("Abhishek");
account.setAmount(500000);
console.log(account.getAmount());