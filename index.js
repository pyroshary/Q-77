//creating a functions which great user if name provided and if not provided then great as a anonyms
function greetUser(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello ".concat(name, "!"));
}
greetUser("Shary");
greetUser();
