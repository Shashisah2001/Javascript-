// Immediately Invoked Function Expressions[IIFE]
// To remove global scope pollution iife is used ()() explain ln:-14 to ln:-18

function work(){
    console.log(` Be Consistense in your work`);
}
work(); // named iife

//()() [()1st :-function definition ()in 2nd :-function call] here we invoked the object
//wrap the function in 1st Paran...
// execute immediately..
//to end semi colon ; is used
(function work(){
    console.log(` Be Consistense in your work to get upskill`);
})();

/****Using arrow function *******/
( () =>{
     console.log(` Consistency`)
} )
(); //unnamed iife

//
( (name) =>{
    console.log(` Be Consistency ${name}`)
}) ("shashi"); 