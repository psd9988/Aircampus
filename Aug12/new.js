
class BankDeposit {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    deposit() {
        return this.amount;
    }

}

let bankDeposit = new BankDeposit('John', 1000);

console.log(bankDeposit.name);