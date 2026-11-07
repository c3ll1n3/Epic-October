 //BMI calculator
 const weight = 65;
 const height = 1.7;
 const bmi = weight / (height * height);
 let category;

 if(bmi<18.5){
    category="Underweight";
 }else if(bmi<25){
    category="Normal";
 }else if (bmi<30){
    category="Overweight";
 }else{
    category="obese";
 }

 console.log("BMI:",bmi.toFixed(2));
 console.log("Category:",category);

 //Leap year checker
 const year = 2024;
 if(year % 4 === 0 && year % 100 !== 0){
    console.log(year + " is a leap year");
 } else if(year % 400 === 0){
    console.log(year + " is a leap year");
 }else{
    console.log(year + " is not a leap year");
 }
 
 const number = 4;
 console.log("Multiplication table for", number);

 for (let i=1; i<=12; i++){
    console.log(number + " x " + i + " = " + (number * i));
 }
 //vowel counter
 const sentence = "Coding is fun and intersting";
 let vowelCount = 0;
 for (let i=0; i<sentence.length; i++){
    let letter =sentence[i].toLowerCase();
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        vowelCount++;
    }
 }
 console.log("Sentence:", sentence);
 console.log("Number of vowels in the sentence:", vowelCount);

 //sum of digits
 const digit = 4827;
 let sum = 0;
 const digitString = String(digit);
 for (let i=0; i<digitString.length; i++){
    sum += Number(digitString[i]);
 }
 console.log("Number:", digit);
 console.log("Sum of digits:", sum);

//string reversal
let word = "Celline";
let reversedWord = "";
for (let i=word.length-1; i>=0; i--){
    reversedWord += word[i];
}
console.log("Original word:", word);
console.log("Reversed word:", reversedWord);

//number guessing game 
let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret number:", secretNumber);
let guess = Number(prompt("Guess a number between 1 and 10:"));
while(guess !== secretNumber){
    if(guess < secretNumber){
        console.log("Too low!");
    }
    else if(guess > secretNumber){
        console.log("Too high!");
    }
    guess = Number(prompt("Try again!"));
}
console.log("Congratulations! You guessed correctly.");


let bill = 2000;
let tipPercentage = 10;
let people = 4;
let tipAmount = (bill * tipPercentage) / 100;
let totalBill = bill + tipAmount;
let amountPerPerson = totalBill / people;
console.log("Original bill:", bill);
console.log("Tip pecentage:", tipPercentage + "%");
console.log("Tip Amount:", tipAmount);
console.log("Total bill:", totalBill);
console.log("Amount per person:", amountPerPerson.toFixed(2));


for (let i=1; i<=5; i++){
    let spaces = " ".repeat(5-i);
    let stars = "*".repeat(2*i - 1);
    console.log(spaces + stars);
}
