/*👉 Scenario: You are creating a payment gateway that supports multiple payment methods like CreditCard and PayPal. Each method has a pay(amount) function, but the implementation is different.

✅ Task:

Create a base class Payment with a pay(amount) method.
Extend it into CreditCard and PayPal, overriding pay() to print different messages.
Implement method overloading by adding a pay() method that either:
Takes only an amount, or
Takes an amount and currency (e.g., pay(100, "USD")).
💡 Tip: Since JavaScript does not support traditional method overloading, use default parameters or checking arguments length inside the method.*/