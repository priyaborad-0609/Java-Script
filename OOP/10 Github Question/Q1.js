/*1. Encapsulation (Data Hiding)
👉 Scenario: You are building an ATM system where a user has a bank account. The balance should not be directly accessible but can be checked via a method.

✅ Task:

Create a BankAccount class with a private #balance property.
Implement deposit(amount) and withdraw(amount) methods.
Add a getBalance() method to return the balance.*/

class BankAccount {
    #deposit;
    #withdrawAmount;
    #Total_Balance;

    bank_balance(deposit,withdrawAmount)
    {
        this.#deposit = deposit;
        this.#withdrawAmount = withdrawAmount;
        this.#Total_Balance = deposit - withdrawAmount;
    }

    getBalance(){

        document.writeln("Bank Balance: " + this.Total_Balance);
    }

}

const balance = new BankAccount();
balance.bank_balance(99000,82000);
balance.getBalance();