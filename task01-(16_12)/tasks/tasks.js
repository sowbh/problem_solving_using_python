// 1. Even or Odd Checker (Electricity Billing System)
// let checkMeterReading = meter_reading => {
//     if (meter_reading % 2 === 0) {
//         return `Even reading, use discount code: EVENPOWER10`;
//     } else {
//         return `Odd reading, use discount code: ODDSAVER5`;
//     }
// };
// console.log(checkMeterReading(452));

let meter_reading = 452;

if (meter_reading % 2 === 0) {
    console.log("Even reading, use discount code: EVENPOWER10");
} else {
    console.log("Odd reading, use discount code: ODDSAVER5");
}

console.log("*****");

// 2. Temperature Conversion (Weather App)
let celsius = 25; 
let fahrenheit = (celsius * 9/5) + 32; 
console.log(`${fahrenheit}°F`); 

console.log("*****");

// 3. Divisibility Check (Offer Eligibility)
let order_number = 15;
if(order_number % 3 ==0 && order_number % 5 ==0){
    console.log('Free Shipping and Cashback');
}
else if(order_number % 3 ==0){
    console.log('Free Shipping');
}
else {
    console.log('Cashback');
}

console.log("*****");

// 4. Personalized Greeting System
let current_time = "4 AM"; 
if (current_time === "12 AM" || current_time.endsWith("AM") && (current_time < "6 AM")) {
    console.log("Good Night!");
} else if (current_time >= "6 AM" && current_time <= "11:59 AM") {
    console.log("Good Morning!");
} else if (current_time >= "12 PM" && current_time < "5 PM") {
    console.log("Good Afternoon!");
} else if (current_time >= "5 PM" && current_time < "9 PM") {
    console.log("Good Evening!");
} else {
    console.log("Good Night!");
}

console.log("*****");
console.log(" *** ");

//  5. FizzBuzz (Event Alert System)
let event_Number = 30;
if(event_Number % 3 == 0 && event_Number % 5 == 0){
    console.log('Handled by Special Team');
}
else if(event_Number % 3 == 0){
    console.log('Handled by Team A');
}
else{
    console.log('Handled by Team B');
}

console.log("*****");

// 6. Speed Limit Checker (Traffic Monitoring System)
let speed = 75;
if(speed < 60){
    console.log('Normal Speed!');
}
else if(speed >= 60 && speed < 80){
    console.log('Warning: Close to Overspeeding');
}
else{
    console.log('Overspeeding! Penalty applied');
}

console.log("*****");

// 7. Grade Calculator (Performance Review)
let score= 85;
if(score > 90){
    console.log('Grade: A+');
}
else if(score >= 80 && score < 89){
    console.log('Grade: A');
}
else if(score >= 70 && score < 79){
    console.log('Grade: B');
}
else if(score >= 60 && score < 69){
    console.log('Grade: C');
}
else if(score < 60){
    console.log('Grade: F');
}
else{
    console.log("Invalid score");
}

console.log("*****");
console.log(" *** ");

// 8. ATM Withdrawal Validator
// multiplying (* 1) a string implicitly converts it to a number
// let balance = prompt("Enter your account balance:") * 1;
// let withdrawal = prompt("Enter the withdrawal amount:") * 1;

let balance = 2000;
let withdrawal = 2500;

if (withdrawal > balance) {
    console.log("Insufficient funds!");
} else {
    balance = balance - withdrawal; 
    console.log("Transaction successful!");
    console.log("Remaining balance: " + balance);
}

console.log("*****");

// 9. Shopping Discount Calculator (Festival Offer)
let purchase_amount = 1200;
let discount = 0;

if (purchase_amount > 1000) {
    discount = 20;
} else if (purchase_amount >= 500) {
    discount = 10;
}

let discounted_price = purchase_amount - (purchase_amount * discount / 100);
console.log("Discounted price: $"+ discounted_price);

console.log("*****");

// 10. Movie Ticket Price Calculator (Dynamic Pricing System)
let age = 65;
let ticket_price = 0;

if(age < 12){
    ticket_price = 5;
}
else if(age>=12 && age<60){
    ticket_price = 10;
}
else {
    ticket_price = 7;
}

console.log(`Ticket price: $`, ticket_price);
