/*
function username(){
    console.log("Shashi");
    //console.log("Sah");
}
 username(); 

 
 function addTNum1(Num1,Num2){//Parameter
    console.log(Num1 + Num2);
 }
 addTNum1(10,225)//Argument

 const result = addTNum(5,10) 
 //console.log("Result:-",result);//gives undefined as output  


//function declare
function addTNum(Num1,Num2){// ():-Parameter {}:-Paranthesis
    let result=Num1 + Num2;
    return result;
 }
 const results = addTNum(5,10)
 console.log("Result:-",results); 
  */
//fn define
/*
 function loggedInMessage(username){ 
return `${username} Get logged in linkedin`
}

//fn call
loggedInMessage("shashi")//nothing tobe printed
//console.log(loggedInMessage("shashi"));
//console.log(loggedInMessage("")); // returned data willbe only get access
//console.log(loggedInMessage()); // given undefined 

//if loop
function loggedInMessage1(username)  { 
    if (username==undefined) {
        console.log("Invalid User");
        return
    }

    return `${username} Get logged in linkedin`
    }
    console.log(loggedInMessage1("jaat")); // when username is declared then jaat willbe override
    console.log(loggedInMessage1()); //and when nothing is declared then we will get undefined
    console.log(loggedInMessage1(""));
    */
/*
    function calculateCartPrice(...num1){
        return num1
    }

    console.log(calculateCartPrice(5));
    console.log(calculateCartPrice(5,500,450));
*/
//function define
    const user = {
          username: "Shashi",
          Product_Price: 199,
          Address: "Selaqui-Dehradun",
    }

    //anyobject means anything we want to ,${}:- is used to concate the data like concatination
    function userObject (anyobject){
        console.log(`Customer name is ${anyobject.username} and price of the product is ${anyobject.Product_Price} who is  from ${anyobject.Address}`);
    }
    //function call
    //userObject(user)
    //console.log(user); // to get in scope

    userObject({
        username:"Shashi",
        Product_Price:199,
        Address:"Selaqui-Dehradun"
    })

const totalCartPrice = [200,400,500,1000]

function getCartPrice(particularPrice) {
    return particularPrice[3]
}
console.log(getCartPrice(totalCartPrice));
console.log(getCartPrice([200,400,500,1000]));

