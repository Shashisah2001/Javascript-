const name = "Tony Stark";
const mySuits = 80;
//console.log(name + " have " +  mySuits + " Armor Suit");

// ``:- backtick i.e String interpolation and we can do anything on the go

//console.log(`${name} have ${mySuits} Suits who is most lovable Character in the whole MCU.`);

const gameName =  new String("CLash of CLans");
 console.log(gameName);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName[11]);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('n'));
 console.log(gameName.substring(1,5)); // to find the position of string word
 console.log(gameName.slice(-3,12)); // to use the negative means to count through negative side
 
 const myName = new String("   Jarvis Rao  ")
 console.log(myName);
 console.log(myName.trim()); // means to reduce the line of code to make it relaibility
 
