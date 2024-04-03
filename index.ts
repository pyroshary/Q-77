//creating a functions which great user if name provided and if not provided then great as a anonyms

function greetUser (name:string = "Anonymous" ){
    console.log(`Hello ${name}!`);
}

greetUser("Shary");
greetUser();