// videos 31-32
// task1
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 < 100 < 10 <20); // true
console.log(-10 == "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(! (10 >= -"-40")); // true
console.log(!("10" === 10)); // true
console.log(!(20 == false)); // true
// task2
let num1 = 10;
let num2 = 20;
console.log(num1<num2); // true
console.log(!!num1); // true
console.log(num1<=num2); // true
console.log(num1!=num2); // true
console.log(typeof(num1)==typeof(num2)); // true
console.log(num1.toString().charAt(1) === num2.toString().charAt(1)); // true
// task3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a !== b && a > c); // true
console.log(!(a >= b) && !(a == b) && +(a || c) && (a !== c)); // true

// videos 33-37
// task1
// Test Case 1
let num =9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

if (num < 10) {
  console.log("00" + num);
}
else if ((num > 10)&& (num < 100)){

 console.log("0" + num);

}
else
{
   console.log( num);  
}

// task2
let numm1 = 9;
let str = "9";
let str2 = "20";

// Output
if (numm1 ==str) {
    console.log("{numm1} Is The Same Value As {str}");
}
if (numm1 !== str) {
    console.log("{numm1} Is The Same Value As {str} But Not The Same Type");
}

if (numm1 !== str2) {
   console.log("{numm1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof (str) == typeof (str2) && str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
    
}

// task3
let numa = 10;
let numb = 30;
let numc = "30";

// Needed Output

if ((numc > numa && numc !== numb)&&(numc > numa && numc !== numb)&&(numc !== numa && numc !== numb)) {
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"+"\n"+
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"+"\n"+
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
} 
// task4
// Edit What You Want Here

let num5 = 15;
let num6 = 10;
let num7 = 15;
let num8 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num5 + num6) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num5 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num5 + num6 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// videos 38-39
let day = "  friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"
day = day.trim();

day = day.charAt(0).toUpperCase()+day.slice(1);

switch (day)
{
  
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
      break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
      break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
      break;
  default:
    console.log("Its Not A Valid Day");



}