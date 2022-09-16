var password = "password";

let length = (`${password.length}`);

function Letters(password){
    return /^[A-Za-z]*$/.test(password)};

function Numbers(password){
    return /^[0-9]*$/.test(password)};

/////additional check for password length no greater than 20.
    if(length > 20){                       
        console.log ("Failure")
    }
/////additional check for password no shorter than 8 digits
    else if(length < 8){
        console.log ("Failure")
    }
/////addeitional check to fail if someone tries to use "password"
    else if (password === "password"){              
        console.log ("Failure")
    }
    else if(length > 9 && 
    Letters === true && 
    Numbers === true){
        console.log("Success")
    }
    else console.log ("Failure");


    
   

    









