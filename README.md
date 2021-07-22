# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is a basic bank app created with Create React App

To start,
After cloning the repo, run 

### npm install

This installs all the package I used in building the app.

Then, run
### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Once the app opens in the browser,

### You will see a screen to create a new account
Here, you fill the form with your full name, email and opening amount you'll like to open the account with.
All that is needed to create the form is the full name ( both firstname and lastname), as the email is not required and also the opening amount can be left empty.
An empty opening amount means one is opening the account with $0, then he or she can choose to deposit later on.
When putting an opening amount, a negative number will throw an error, so only positive numbers.
If you try to withdraw more than what is in the account, It shows an error saying insufficient balance.

### Once that's done
You'll be directed to a page where you can choose to deposit or withdraw money. 
This page shows the account name, and account balance. Whenever a deposit or withdrawal is made, it is reflected in the account balance immediately.
