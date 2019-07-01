# Bank tech test

## Introduction
This is the first of 3 practice tech tests as part of week 10 at makers. I decided to do this in Javascript as this is the language I am least comfortable with so far.

My approach was to use TDD to solve the below problem using jasmine as my testing framework, and so that my solution fits the requirements and acceptance criteria below.

The app is only available to interact with through the console in your browser as per the instructions below.

## Instructions for use
- In the command line, run:
```
git clone https://github.comsamkitchen94bank_tech_test.git
```
- Then switch to this directory and run the below in the command line to view the tests:
```
open specRunner.html
```

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When she prints her bank statement
- Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
