// ==================================== ALERT =============================================
// ========================================================================================

// 1  Write ascript to greet your website visitor using JS alert box
// alert("Assalam Alaikum Bro");

// 2	Write a script to display following message on your web page
// alert("Error! please Enter a valid password");

// 3    Write a script to display following message on your web page: (Hint : Use line break)
// alert("Wellcome to JS Land...\n Happy Coding!");

// 4    Write a script to display following messages in sequence:
// alert("Wellcome to JS Land...");
// alert("Happy Coding! \n ");

// 5    Generate the following message through browser’s developer console
// alert("hello......i can run JS through my web browser's console");

// ================================ 2_variable & String ================================
// =====================================================================================

// 1 Declare a variable called username.
// var userName;

//2 Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "umer Shehzad";

//3 Write a script to
// var message;
// message = "hello World";
// alert(message);

//4  Write a script to save student’s bio data in JS variables and show the data in alert boxes

// var studentName = ["Umer", 24, "FUUAST", "Mob & WebApp Dev"];
// for (var i = 0; i < studentName.length; i++) {
// alert(studentName[i]);
// }

//5  Write a script to display the following alert using one JS variable:
// alert(" PIZZA\n PIZZ \n PIZ \n PI \n P");

//6 Fortune Teller:
// var numOfChild = 4;
// var partnerName = "Serina";
// var geolocation = "USA";
// var jobTitle = "Developer" ;
// alert("you will be a "+jobTitle+" in "+geolocation+", and married to "+partnerName+" with "+numOfChild+" kids.");

//7    Declare a variable called email & assign to it a string that represents your Email Address

// var email = prompt("My Email :");
// alert("My Email Addreess Is "+email);

/* 8  Declare a variable called book & give it the value “A
smarter way to learn JavaScript”. Display the following
message in an alert box:*/

// var book = "A smarter way to learn JavaScript";
// alert(book);

/* 9  Use the variables, declared in exercise 4 & show the details
giving meaning to data. Like “My name is Ali Khan”, “I am
17 years old”, “I study in SSUET”, “I take Mobile & Cloud
Computing, Module A classes”   */

// var myName = "my name is Umer";
// var age = "and I am 23 years old";
// var edu = "and I am studying at FUUAST";
// alert(myName + age + edu);

//10  Write a script to display this in browser through JS
// document.write("yay! I can writecontent through JS ");


// ============================== 3_VariablesForNumbers ===============================
// ====================================================================================

//1 Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 23;
// alert("I'm "+age+" years old");

/* 2 Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */

// var track = 20;
// alert("You have visited the page "+track+" times");

//3 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

//  var birthYear = 1993;
// document.write("My birthDay year is "+birthYear+"<br>"+" Data type of my declared variable is "+typeof(birthYear));

//4  A visitor visits an online clothing store

// var visitorName = "Umer";
//  var productTitle = "Perfumes";
//  var quantity =5;
//  document.write(visitorName+" order "+quantity+" "+productTitle+" on XYZ Clothing Store");

// ================== 4_VariableNames_LegalAndIllegal ======================

//1 Declare 3 variables in one statement
// var name, age, education;

//2 Declare 5 legal & 5 illegal variable names
// var age, age1, $age, _age, a12ge;
// var 1age, .age,? age, 111, ..age;

/* 3Display this in your browser
// a A heading stating “Rules for naming JS variables”
// document.write("Rules for naming JS variables " + "<br>");

// b  
// document.write("Variable names can only contain letters,underscores,numbers and dollars sign" + "<br>");
// document.write("For example $my_1stVariable");

//c
// document.write("ariables must begin with a dollar, underscore or characters. For example $name, _name or name");

//d
// document.write("Variable names are case Sensitive");

//e
// document.write("Variable names should not be JS KeyWords");


// =================================  5-7_MathExpressions =========================
// ================================================================================
// 1  Write a program that take two numbers & add them in a new variable. 
// var a = +prompt("Enter First No");
// var b = +prompt("Enter Second No");
// var add = a + b;

// 2  Repeat task1 for subtraction, multiplication, division & modulus. 

// var sub = a - b;
// var mul = a * b;
// var div = a / b;
// var rem = a % b;
// alert("Sum of " + a + " and " + b + " is " + c);
// alert("Result of Subtracting " + a + " from " + b + " is " + sub);
// alert("Result of Multiplying " + a + " and " + b + " is " + mul);
// alert("Result of Dividing " + a + " by " + b + " is " + div);
// alert("reminder of " + a + " by " + b + " is " + rem);

//3  Do the following using JS Mathematic Expressions:

// var number;
// document.write("Value after variable declaration is : " + number + "<br>");
// number = 3;
// document.write("Initial value is : " + number + "<br>");
// number++;
// document.write("Value after increment is : " + number + "<br>");
// number = number + 7;
// document.write("Value after addition is : " + number + "<br>");
// number--;
// document.write("Value after decrement is : " + number + "<br>");
// number = number % 3;
// document.write("VThe reminder is : " + number + "<br>");

// 4  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 ticketsto a movie

// var price = 600;
// var total = price * 5;
// document.write("Total cost of buying 5 ticket to a movie is " + total + " PKR");

//6 The Temperature Converter:

// var celcius = 35;
// var farenhite = (celcius * 9 / 5) + 32;
// document.write("35<sup>o</sup>C is " + farenhite + "<sup>o</sup>F<br>");
// farenhite = 95;
// celcius = (farenhite - 32) * 5 / 9;
// document.write("95 <sup>o</sup>F is " + celcius + "<sup>o</sup>C<br>");

// 7  Write a program to implement checkout process of a shopping cart system for an e-commerce website

// var totalPriceOfItem1 = 560;
// var totalPriceOfItem2 = 200;
// var quantityOfItem1 = 2;
// var quantityOfItem2 = 5;
// var shipCharges = 150;
// var totalCharges = (totalPriceOfItem1 * quantityOfItem1) + (totalPriceOfItem2 * quantityOfItem2) + shipCharges;

// document.write("Price of Item 1 is: "+totalPriceOfItem1+"<br>");
// document.write("Quantity of Item 1 is: "+quantityOfItem1+"<br>");
// document.write("Price of Item 2 is: "+totalPriceOfItem2+"<br>");
// document.write("Quantity of Item 2 is: "+quantityOfItem2+"<br>");
// document.write("Shipping charges is: "+shipCharges+"<br>");
// document.write("Total cost of your orders is: "+totalCharges+" PKR <br>");

// 8 Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser.

// var totalMarks = +prompt("Enter Your total Marks");
// var marksObtained = +prompt("Enter Your obtained Marks");
// var percentage = Math.floor((totalMarks / marksObtained) * 100);
// document.write("Total Marks is: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percantage " + percentage + " % <br>");

//9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

// var usDollar = 10;
// var saudiRayal = 25;
// var pakUs = 10 * 104;
// var pakRaya = 25 * 28;
// var pak = pakUs + pakRaya;
// document.write("Total currency in PKR is : " + pak);

/* 10   Write a program to initialize a variable with some number
and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression.   */

// var number = 10;
// number = ((number+5)*10)/2;
// alert(number);

// 11 The Age Calculator:

// var currentYear = 2018;
// var birthYear = +prompt("Your BirthYear");
// var age = currentYear-birthYear;
// document.write("Current year : "+currentYear+"<br>");
// document.write("Birth year : "+birthYear+"<br>");
// document.write("They are either : "+age+"<br>");

/*12 The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”  */

// var radius = +prompt("Enter radius");
// var circumference = Math.floor((2*3.142)*radius);
// document.write("circumfernce on :"+circumference);

// 13  Write a program to take a number in a variable, do the required arithmetic to display the following result in yourbrowser:

// var a = 10;
// document.write("The Value of a: "+a+"<br>");
// a=++a;
// document.write("The Value of ++a: "+a+"<br>");
// a=++a;
// document.write("Now The Value of a: "+a+"<br>");
// a=--a;
// document.write("Now The Value of --a: "+a+"<br>");
// a=--a;
// document.write("The Value of a: "+a+"<br>");

//14 What will be the output in variables a, b & result after execution of the following script:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: "+a+"<br>"+"b is: "+b+"<br>"+"result is: "+result+"<br>");

//15 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

// var favSnack = "cake";
// var curAge = 23;
// var estAge = 65;
// var estSnack = 2;
// var total = (2*365)*42;
// document.write("Favorite Snack: "+favSnack+"<br>"+"Current Age: "+curAge+"<br>"+"Estmated Max Age: "+estAge+"<br>"+"Snack Per Day: "+estSnack+"<br>"+"<br>");
// document.write("you will need "+total+" "+favSnack+" to last youuntil the rip old age of "+estAge);


// =========== 8-11_ConcatenatingStrings_Prompts_IFStatements_ComparisonOperators ========
// =======================================================================================
//1 Write a program that takes input a name from user & greet the user 

// var userInput = prompt("Please enter your name");
// alert("Hi, "+userInput);


//3 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var city = prompt("Enter city namr");
// city = city.toLowerCase();
// if(city=="karachi"){
//     alert("Welcome to the city of ligths");
// }else{
//     alert("please enter karachi");
// }

//4 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am

// var gender = prompt("Enter city namr");
// gender = gender.toLowerCase();
// if (gender == "male") {
//     alert("Good Morning Sir");
// } else {
//     alert("Good Morning Ma'am");
// }

//5 Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var color = prompt("Enter city namr");
// color = color.toLowerCase();
// if (color == "red") {
//     alert("vahiclemust stop");
// } else if (color == "yellow") {
//     alert("vahicle should get ready to move");
// } else if (color == "green") {
//     alert("vahicle can move now");
// } else {
//     alert("Do whatever you want");
// }

//7 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var remFuel = +prompt("Enter Fuel in litres");
// if(remFuel<1){
//     alert("please refill the fuel in the car");
// }else{
//     alert("Ok");
// }

//8  un this script, & check whether alert message would be displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } ////True

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//False

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//False

// if (c === 13){
// alert("condition 2 is true");
// }//False

// if (++c < 14){
// alert("condition 3 is true");
// } ////True

// if(c === 14){
// alert("condition 4 is true");
// }//False

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//True

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }//false

//9 Show the total marks, marks obtained, percentage, grade & remarks like:

// var subject1 = +prompt("Enter first subject Marks");
// var subject2 = +prompt("Enter Second subject Marks");
// var subject3 = +prompt("Enter third subject Marks");
// var marksObtained = subject1 + subject2 + subject3;
// var totalMarks = +prompt("Enter Total Marks");
// var percentage = (marksObtained / totalMarks) * 100;
// if (percentage >= 80) {
//     document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + marksObtained + "<br>" + "Petrcentage : " + percentage + "%" + "<br>" + "Grade : A-one " + "<br>" + "Remarks : Excellent " + "<br>");
// } else if (percentage >= 70) {
//     document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + marksObtained + "<br>" + "Petrcentage : " + percentage + "%" + "<br>" + "Grade : A " + "<br>" + "Remarks : Good " + "<br>");
// } else if (percentage >= 60) {
//     document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + marksObtained + "<br>" + "Petrcentage : " + percentage + "%" + "<br>" + "Grade : B " + "<br>" + "Remarks : You need to improve " + "<br>");
// } else if (percentage < 60) {
//     document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + marksObtained + "<br>" + "Petrcentage : " + percentage + "%" + "<br>" + "Grade : Fail " + "<br>" + "Remarks : Sorry " + "<br>");
// } else {
//     alert("Insert appropriate marks");
// }

/*10    Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.   */

// var item1 = prompt("Name First item ");
// var quanItem1 = +prompt("Quantity of item 1");
// var item2 = prompt("name Second item");
// var quanItem2 = +prompt("Quantity of item 1");
// var priceOfItem1 = 300;
// var priceOfItem2 = 400;
// var totalPriceOfItem1 = priceOfItem1 * quanItem1;
// var totalPriceOfItem2 = priceOfItem2 * quanItem2;
// var shipCharges = 250;
// var totalAmount = totalPriceOfItem1 + totalPriceOfItem2+shipCharges;
// var discount = totalAmount / 10;
// if (totalAmount >= 2000) {
//     var discountAmount = totalAmount - discount;
//     document.write("Price of " + item1 + " is " + priceOfItem1+ "<br>" + "Quantity of " + item1 + " is " + quanItem1 + "<br>" + "Price of " + item2 + " is " + priceOfItem2 + "<br>" + "Quantity of " + item2 + " is " + quanItem2 + "<br><br>" + "Shipping Charges " + shipCharges + "<br><br>" + "Total cost of your order is " + totalAmount +"<br>"+ "After Discount " + discountAmount);
// }

/* 11 Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.   */

// var secretNo = 5;
// var guess = +prompt("Guess No");
// if (secretNo == guess) {
//     alert("Bingo! correct Answer");
// } else {
//     alert("Try Next Time");
// }

//12 Write a program to check whether the given number isdivisible by 3. Show the message to the user if the number isdivisible by 3

// var input = +prompt("Enter No");
// var mode = input % 3;
// if(mode==0){
// alert("Divisible by 3");
// }else{
//     alert("Not divisible by 3");
// }

// 13 Names & Total scores of two teams are taken as input. Writea program that shows which team has won the game or show ifthere is a tie. (Team A or Team B)

// var teamName1 = prompt("Name team one");
// var scoreTeamName1 = +prompt("Score team one");
// var teamName2 = prompt("Name team two");
// var scoreTeamName2 = +prompt("Score team two");
// if (scoreTeamName1 > scoreTeamName2) {
//     alert(teamName1 + " have won the game");
// } else if (scoreTeamName1 < scoreTeamName2) {
//     alert(teamName2 + " have won the game");
// } else if (scoreTeamName1 == scoreTeamName2) {
//     alert("There is a tie");
// }else{
//     alert("Match Not played");
// }

//15 Write a program that checks whether the given input is an even number or an odd number.
// var input = +prompt("Enter No");
// if(input==i+2){
// alert("odd");
// }else if(input==i+1){
// alert("even");
// }

/* 16 Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”   */

// var input = +prompt("Enter No");
// if(input>40){
// alert("its too hot");
// }else if(input>30){
//     alert("weather is Normal");
// } else if(input>20){
//     alert("Cool Weather");
// } else if(input>10){
//     alert("OMG! Too cool Weather");
// }

/* 17 Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

// var input1 = +prompt("Enter First No");
// var input2 = +prompt("Enter Second No");
// var op = prompt("Which Operation to perform + , - , * , / , %");
// if (op == "+") {
//     var ans = input1 + input2;
//     alert(input1 + " + " + input2 + " is " + ans);
// } else if (op == "-") {
//     var ans = input1 - input2;
//     alert(input1 + " - " + input2 + " is " + ans);
// } else if (op == "*") {
//     var ans = input1 * input2;
//     alert(input1 + " * " + input2 + " is " + ans);
// } else if (op == "/") {
//     var ans = input1 / input2;
//     alert(input1 + " / " + input2 + " is " + ans);
// } else if (op == "%") {
//     var ans = input1 % input2;
//     alert(input1 + " % " + input2 + " is " + ans);
// } else {
//     alert("Please enter Numbers");
// }

/*18 Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”*/

// var day = prompt("Please enter the day");
// day = day.toLowerCase();
// var weak = ["monday", "tuesday", "thursday", "friday"];
// if (day == "saturday") {
//     alert("Its the week end!");
// } else if (day == "sunday") {
//     alert("Yay! Its the Holiday");
// } else {
//     for (var i = 0; i < weak.length; i++) {
//         if (day == weak[i]) {
//             alert("Its the weak day");
//             break;
//         } else {
//             alert("Insert Proper day");
//             break;
//         }
//     }
// }

//19 Write a program that takes input user’s score, if it’s greater than 50, say “You are passed”. Otherwise, show “Try again!”

// var score = +prompt("Please enter the score");
// if (score > 50) {
//     alert("Pass!");
// } else if (day < 50) {
//     alert("Fail");
// } else {
//     alert("Insert less than 100 and Greater Than 0");
// }

/*20 Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.").*/

// var firstScore = +prompt("First No");
// var secondScore = +prompt("Second No");
// if (firstScore > secondScore) {
//     alert("The greater number of " + firstScore + " And " + secondScore + " is " + firstScore);
// } else if (firstScore < secondScore) {
//     alert("The greater number of " + firstScore + " And " + secondScore + " is " + secondScore);
// }else if(firstScore==secondScore){
//     alert("They are equal");
//     }else{
//         alert("please enter number only");
//     }

//22Write a program to take input a number & tell whether it’s a positive or negative number.

// var num = +prompt("Enter Number");
// if(num>0){
//     alert(num+" is positive");
//     }else{
//         alert(num+" is negative");
//     }

/*23 The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1dog".*/

// var num = +prompt("Enter Number");
// var name= prompt("Enter Noun");
// if(num>1){
// alert(num+" "+name+"s");
// }else{
//     alert(num+" "+name);
// }


//===================12-13_IF...ELSE_ELSE...IFStatements_SetOfConditions  =================================

//1 Write a program to check whether the given input number isdivisible by 3 or else show a message “Number is not divisibleby 3”

// var input = +prompt("Enter No");
// var mode = input % 3;
// if(mode==0){
// alert("Divisible by 3");
// }else{
//     alert("Not divisible by 3");
// }

// Write an if/else statement with the following condition:If the variable age is greater than 18, output "Old enough",otherwise output "Too young".

// var age= +prompt("Enter Age");
// if(age>=18){
// alert(age+" Old enough ");
// }else if(age<18){
//     alert(age+" Too young ");
// }

/*4 Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output*/

// var name= prompt("Enter Name");
// if(name=="umer"){
// alert("Wow we have the same Name");
// }

/*8 Write a program that takes time as input from user in 24 hours
clock format like: 1900 = 7pm. Implement the following case
using if, else & else if statements*/

// var time = +prompt("Enter time 1900 or 1200");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning !");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good AfterNoon !");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening !");
// } else if (time >= 2100 && time < 2359) {
//     alert("Good Night !");
// }else{
//     alert("Enter Appropriate Time");
// }

/*10 Write a program thata. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give
message “ Please enter your password”
ii. Check if both passwords are same. If they are same,
show message “Correct! The password you entered
matches the original password”. Show “Incorrect
password” otherwise. */

// var password = 125;
// var userPass= +prompt("Enter Password");
// if(userPass==""){
//     alert("Please enter the password");
// }else if(userPass==password){
//     alert("Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect password");
// }

/*11 Write a program that adds an else statement to the following
script to display “You are not Fahad”
var firstName = "Ali";
if (firstName === "Fahad") {
document.write("Hello Fahad!");
}*/
// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }else{
//     document.write("you are not Fahad!");  
// }

/*12 This if/else statement does not work. Try to fix it:*/
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// 13 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var first = +prompt("first");
// var second = +prompt("Second");
// if (first > second) {
//     alert(first + " is larger");
// } else if (first < second) {
//     alert(second + " is larger");
// } else if (first == second) {
//     alert("There is a tie");
// }else{
//     alert("enter numbers");
// }

//14 Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var num = +prompt("Enter Number");
// if (num > 0) {
//     alert(num + " is positive");
// } else if (num < 0) {
//     alert(num + " is negative");
// } else if (num == 0) {
//     alert(num + " is zero");
// } else {
//     alert("Enter number only");
// }

//15 Ask the user what the current hour is. If the hour is between6 and 9 a.m., tell the user, "Breakfast is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." Ifthe hour is between 5 and 8 p.m., tell the user, "It's dinnertime." For any other hours, tell the user, "Sorry, you'll have towait, or go get a snack." (Hint: Store the hour in 24 hours clockformat i.e. 14 for 2pm , 15 for 3pm)

// var num = +prompt("Enter hour");
// if (num >= 6 && num <= 9) {
// alert("Breakfast is served.");
// } else if (num >= 11 && num <= 6) {
// alert("Time for lunch.");
// } else if (num >= 5 && num <= 8) {
// alert("It's dinner time.");
// }else{
//     alert("You will have to wait");
// }

// 20  Use a conditional (ternary) operator for this exercise:If the variable age is a value below 18, the value of the variablevoteable should be "Too young",otherwise the value of voteable should be "Old enough".

// var age = +prompt("Please enter the score");
// if (age < 18) {
//     alert("Too Young");
// } else if (age >18 ) {
//     alert("Old enough");
// } else {
//     alert("Insert number only");
// }

