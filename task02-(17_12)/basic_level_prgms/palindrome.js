//2.palindrome
// ex: 1. input="madam", output="A Palindrome"
// 2. input="apple", output="Not a palindrome"

const isPalindrome= prompt("Enter a value:");  
const newStr= isPalindrome.split("").reverse().join("");
console.log("userInput:", isPalindrome);
console.log("reversedString:",newStr);

if(isPalindrome == newStr){
    console.log("A Palindrome");
}
else{
    console.log("Not a palindrome");
}
