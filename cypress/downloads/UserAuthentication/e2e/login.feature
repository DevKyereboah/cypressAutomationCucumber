Feature: User Authentication of AMAP Home Page

Scenario: User login

Given A user access the AMAP home Page

And the the have valid login credentials

And the user type email

And the user type password

When  the user clicks on the Sign in button

Then  the user should be presented with the dashboard page


