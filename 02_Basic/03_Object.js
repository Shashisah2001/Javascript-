// Singleton :-  is a pattern used restrict the class to be created
// Object literals:- used to declare object

//Object.create // which is used through constructor and singleton work under the constructor
//{} inside the para data are object even para is also known for object
  //******************Object Literals********************* */
  const mySymbol = Symbol("mykey1");
const jsUser = {
 Name:"shashi sah", // the declared name is already a 
 Age: 22,
 Address: "Nepal",
 Email: "Shashisah@gmail.com",
 "College": "Uttrakhand Technical University ",
 [mySymbol] : 1
}

console.log(jsUser);
console.log(jsUser.Name);
console.log(jsUser["College"]);
console.log(typeof(jsUser.mySymbol));

jsUser.Email = "Shashisah@google12.com"
//Object.freeze(jsUser)// to freeze the data means make is unchanged
jsUser.Email = "shash@google.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello User");
    console.log(`Hello User ${this.Name} from ${this.Address}`);
} // To declared the function


console.log(jsUser.greeting); // it declared the function but not proper 
console.log(jsUser.greeting()); // it declared the function  proper 
