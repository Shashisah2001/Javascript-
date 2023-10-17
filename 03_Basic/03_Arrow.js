// for current context we use this.(defined name as username)
/*
const user = {
    username: "Shashi Shah",
    Passkey: "Key@123",


    newMessage:function () {
        console.log(`${this.username}, welcome to our youtube channel`);
        console.log(this);
    }
}

// user.newMessage();
// console.log(user);
// user.username = "Oggy",
 user.newMessage();
//console.log(this);//when you are in node environment then u will get nothing empty object coz there is nothing to print
                  // and when we run this code on console then when we run this on browser the global is on window

                /*  In JavaScript, the `this` keyword refers to the current execution context, and its value is
                 determined by how a function is invoked. The behavior of `this` can be a bit
                  tricky, especially in certain contexts. Let me break it down:

                  1. **Global Context:**
                     - When used outside of any function, `this` refers to the 
                      global object, which is `window` in a browser environment.
                     ```javascript
                     console.log(this === window); // true
                     ```
                  
                  2. **Function Context:**
                     - In a regular function (not an arrow function), `this` is determined
                      by how the function is called.
                     ```javascript
                     function exampleFunction() {
                       console.log(this);
                     }
                  
                     exampleFunction(); // 'this' is the global object (window in a browser)
                     ```
                  
                  3. **Object Method:**
                     - When a function is a method of an object, `this` refers to the 
                     object that the method is called on.
                     ```javascript
                     const obj = {
                       method: function() {
                         console.log(this);
                       }
                     };
                  
                     obj.method(); // 'this' is the 'obj' object
                     ```
                  
                  4. **Event Handlers:**
                     - In event handlers, such as those used in the browser, `this` refers 
                     to the DOM element that triggered the event.
                     ```javascript
                     document.getElementById('myButton').addEventListener('click', function() {
                       console.log(this); // 'this' is the DOM element that was clicked
                     });
                     ```
                  
                  5. **Constructor Functions:**
                     - When a function is used as a constructor with the `new` keyword, `this` refers
                      to the newly created instance of the object.
                     ```javascript
                     function ConstructorExample() {
                       this.property = 'value';
                     }
                  
                     const instance = new ConstructorExample();
                     console.log(instance.property); // 'value'
                     ```
                  
                     ```
                  
                  Understanding `this` is crucial for writing effective and bug-free JavaScript code.
                   It's important to be aware of the different contexts in 
                   which `this` is used and how it behaves in each situation.
                   browser k andar ka global object is window object
*/
/*
function chai(){
    let username = "shashi"
    console.log(this.username); //will get undefined coz unable use "this" inside the function like this
    console.log(this); //
}
chai();
*/
/**********************Using Arrow Function******************/
// => :- is determined as arrow function
   //  instead of this:- const arrowFunction = function () {}         |
   //We use this in arrow function |:-const arrowFunction = () => {}  |
    // const arrowFunction = () => {
    //     let username = "Shashi"
    //   console.log(this.username); // will get undefined here
    //  };
                  
    //  arrowFunction(); // 'this' is determined by the surrounding context
              
    //Explicit Return
// const arrowFunction = (num1,num2)=>{
//      return num1+num2
// }
// console.log(arrowFunction(5,10));

     //impicit return
//      const arrowFunction = (num1,num2)=> (num1+num2)

//    console.log(`Sum is :- `, arrowFunction(5,10));


// for object used  it in braces and this braces should be in parenthesis.like given ex. 
const arrowFunction = (num1,num2)=> ({username:"Jaat"})
 

console.log(arrowFunction(1,5));
   //console.log(`jaatoo and ${ arrowFunction(5,10)}, are friends`);