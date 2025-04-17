//3.grading scale
// A = 90% - 100%
// B = 80% - 89%
// C = 70% - 79%
// D = 60% - 69%
// F = 0% - 59%

// prompt() → always returns a string
// +prompt: Adding + before prompt → converts that string to a number
const marks = +prompt("Enter marks:");
if (isNaN(marks)) {
    console.log("Please enter correct input in number");
} else {
    if (marks >= 90 && marks <= 100) {
        console.log("A");
    } else if (marks >= 80 && marks <= 89) {
        console.log("B");
    } else if (marks >= 70 && marks <= 79) {
        console.log("C");
    } else if (marks >= 60 && marks <= 69) {
        console.log("D");
    } else if (marks >= 0 && marks <= 59) {
        console.log("F");
    } else {
        console.log("Enter correct value");
    }
}
