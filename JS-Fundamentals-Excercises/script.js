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
num_one.innerHTML = `${num} after increament becomes ${incOne}`;

function increaseByOne(num) {
  return ++num;
}