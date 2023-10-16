/*
// {}:- Scope -(Global_Scope, Block_Scope)
  // Sometime var make error when we use it in condition 
  // we can access global scope value to block scope but not vice versa
  console.log("FIRST")
if (true) {
    let a = 5
    const b =10
    var c = 15

    console.log('Inner:-',a);
    console.log('Inner:-',b);
}

 console.log(c);


//inside console
console.log("SECOND")
if (true) {
    let a = 5;
    const b = 10;
    var c = 15;

    console.log(a);  // This will work inside the block
    console.log(b);  // This will work too
    console.log(c);  // This should also work
}

// Trying to access a, b, or c here(outside the condition) will result in errors coz its block scope



 // Another example
 console.log("THIRD")
 let a;
 let b;
if (true) {
    a = 5;
    b = 10;
    var c = 15;
}

console.log(a);  // Now a is accessible here
console.log(b);  // This will still give an error as b is block-scoped and if we declared b as let the we'll get output
console.log(c);  // This should work since var has function scope
*/
/*
//About:- Nested Scope [closure]

function one() {
    const username = "Rakesh aka Jaat"
    function two() {
        const Address = "Selaqui-Dehradun"
        console.log(username); // Accessing function One from the innermost scope will give positive result 
    }
    two()
}
one()
*/

/*
// with if condition

if (true) {
    const user = "Tony" // if we change the defined data result will changed 
    if(user==="Tony"){
        const superhero = " is Ironman"
        console.log(user+superhero)
    }
   // console.log(superhero);

   else {
   console.log("Normal human")
   } 
}
//console.log(user);
*/
/*********Hoisting******/

function addOne(num){
    return num+1
}

console.log("Sum is :-",addOne(5)); // but if we execute this above the line 81 it will not give any error coz addOne is declare as any datatype

const addTwo = function (num) {
    return num+10
}

console.log("Sum is :- ", addTwo(10)); // so if we execute this line before line 87 it will give erro coz data is defined as constant