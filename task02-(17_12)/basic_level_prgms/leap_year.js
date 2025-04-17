//1.leap year
// ex: 1. input=2000, output="A Leap Year"
// 2. input=2021, output="Not a leap year"

const year=prompt("Enter year:");  //prompt always returns a string

if(year % 4 ==0 && year % 100 !==0 || year % 400 ==0){
    console.log("Year:", year,"A Leap Year");
}
else{
    console.log("Year:", year,"Not a leap year");
}
