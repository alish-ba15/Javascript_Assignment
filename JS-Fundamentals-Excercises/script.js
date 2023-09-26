//1 Write a program to display alert with your name and class on next line.(use line break)
var name = "Alishba Zia";
var crouse = "Web and Mobile App Development";
alert(`I'm ${name} \n\nStudent of ${crouse}.`);
console.log("🚀 ~ file: script.js:7 ~ crouse:", crouse)


// ## 2 Declare a variable birthYear and assign your birthyear in this variable and alert the type of the variable like this 'type of birth year is number'
var  birthYear = 2004;
alert(`Type of birthyear is  ${typeof birthYear}`)
console.log("🚀 ~ file: script.js:13 ~ typeof birthYear:", typeof birthYear);


// ##3 Display in the browser
//   a. A heading stating “Rules for naming JS variables”
//   b. Variable names can only contain ______, ______,
//   c. ______ and ______.
//   d. For example $my_1stVariable.
//   e. Variables must begin with a ______, ______ or
//   f. _____. For example $name, _name or name

//## 4 Write a program that returns your age in days. (take age as an input)
var yourAge = prompt("Enter your age :");
var result = document.getElementById("result");
var myAgeInDays = calculateAgeInDays(yourAge); 
console.log("🚀 ~ file: script.js:26 ~ myAgeInDays:", myAgeInDays);
result.innerHTML = `My age in days is ${myAgeInDays}.`;

function calculateAgeInDays(yourAge) {
    ageInDays = yourAge * 365;
    return ageInDays;
}


//## 5 Create a program that takes a number as an input, increments the number by +1 and returns the result. (take number as an input)
var num = prompt("Enter any number");
var num_one = document.getElementById("num_one"); 
var incOne = increaseByOne(num);
console.log("🚀 ~ file: script.js:39 ~ incOne:", incOne)
num_one.innerHTML = `ANS : ${num} after increament becomes ${incOne}`;

function increaseByOne(num) {
  return ++num;
}

//## 6 Create a program that takes a number as an input, decrements the number by -1 and returns the result.
var numDecreament = prompt("Enter any number for decreament");
var num_Dec = document.getElementById("num_Dec");
var decNum = numDecreaseByOne(numDecreament)
num_Dec.innerHTML = `ANS :${numDecreament} after decreament becomes ${decNum}.`

function numDecreaseByOne(num) {
  return --num;
}

//## 7 Create a function that takes a number and return square of a number
var numSquare = prompt("Enter number for square");
var numSquaring = forSquaring(numSquare);
num_square.innerHTML = `ANS : Squaring of ${numSquare} is ${numSquaring}.`

function forSquaring(a){
   return a*a;
}

//## 8 check if the entered number is a positive or a negative integer
var checkedNum = prompt("Enter any number for checking  weather it is positive or negative");
if (checkedNum < 0){
  var afterCheck = 'Negative';
}else{
  var afterCheck = 'Positive';
}
checked_Num.innerHTML = `ANS : Your given number is ${afterCheck}`

//##9 Write a script to  convert the total currency to Pakistani Rupees. Perform all calculations in a single expression
var currencyUS = 10;
var currencyRiyal = 25;
var totalRupees = (currencyUS*163)+(currencyRiyal*43);
total_Rupees.innerHTML = `ANS : You have total ${totalRupees}  Pakistani Rupees,`

//##11
var cityName = prompt("Enter your city name : ");
if (cityName.toLowerCase() === 'karachi'){
  var yourCity = "Welcome to city of lights!"
}else if (cityName.toLowerCase() === 'lahore'){
  var yourCity = 'Welcome to historical city!'
}else if (cityName.toLowerCase() === 'quetta'){
  var yourCity = 'Welcome to cold city!'
}else{
  var yourCity = 'Please write correct city name!'
}
city_Name.innerHTML = `ANS : ${yourCity}`

//##12
const forAdd = (a,b) => {
 return a+b;
}
var firstNum = prompt('Enter your first number : ');
var opeartionSign = prompt('Enter operation (+, -, *, /, %)');
var secondNum = prompt('Enter your second number :');
var numOne = +firstNum;
var numSec = +secondNum;
if(opeartionSign === '+'){
  var resultCal = forAdd(numOne,numSec);
  console.log("🚀 ~ file: script.js:99 ~ resultCal:", resultCal)
}else if (opeartionSign === '-') {
  var resultCal = forSubtract(numOne,numSec);
  console.log("🚀 ~ file: script.js:99 ~ resultCal:", resultCal)
}else if (opeartionSign === '*') {
  var resultCal = forMultiply(numOne,numSec);
  console.log("🚀 ~ file: script.js:99 ~ resultCal:", resultCal)
}else if (opeartionSign === '/') {
  var resultCal = forDivision(numOne,numSec);
  console.log("🚀 ~ file: script.js:99 ~ resultCal:", resultCal)
}else if (opeartionSign === '%') {
  var resultCal = forModule(numOne,numSec);
  console.log("🚀 ~ file: script.js:99 ~ resultCal:", resultCal)
}else{
  var resultCal = `Please write number as input!`
  console.log("🚀 ~ file: script.js:117 ~ resultCal:", resultCal)
}
cal_program.innerHTML = `ANS : ${numOne} ${opeartionSign} ${numSec} = ${resultCal}`

 function forSubtract(a,b){
  return a-b;
 }
 function forMultiply(a,b) {
   return a*b;
 }
 function forDivision(a,b) {
  return a/b;
 }
 function forModule(a,b){
  return a%b;
 }

// ## 13
var userSalary = prompt("Enter your salary : ");
if(userSalary < 60000){
  var answerIs = 'You are a junior developer!';
}else if(userSalary >= 60000  && userSalary < 100000){
  var answerIs = 'You are a web developer!';
}else if(userSalary >= 100000){
  var answerIs = 'You are a software engineer!'
}
user_Salary.innerHTML = `ANS 13 : ${answerIs}`;