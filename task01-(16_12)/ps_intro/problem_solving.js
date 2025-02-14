// prompt("Enter your name");

// 1. sum of all even numbers from 1 to 20
let sum=0;
for(let start=1; start<=20; start++){
    if(start%2==0){
        sum+=start;
    }
}
console.log(sum);

console.log("*****");

// 2. user adding product to cart, so before adding need to check the cart.
// if;
//     cart is having that product -> increment product cart value
// else;
//     add the product in the case

// let isCartHaveItem = false;
// if(isCartHaveItem){
//     console.log("Increment product cart value");
// }
// else{
//     console.log("add product to cart");
// }
        
// updated version
let isCartHaveItem =true;
let count=0;
if(isCartHaveItem){
    console.log("Goto cart");
    count++;
    console.log(count);
}
else{
    console.log("add to cart");
}
        
console.log("*****");

// 3.
let isUserloggedIn = false; 
cartItem="Iphone 14";
if(isUserloggedIn){
    console.log("Redirect user to add to cart page");
}
else{
    console.log("Redirect user to login page");
}

console.log("*****");

// 4.
let remote=false;
if(remote){
    console.log("Turn on AC");
}
else{
    let findStatus = "Find the remote";
    if(findStatus){
        console.log("nested if:, Turn on AC" );
    }
    else{
        console.log("Not yet found");
    }
}

console.log("*****");

//5.
console.log("" == true);
console.log(1==true);
console.log(String == Number);
console.log(true*"");
console.log(Boolean*String);
