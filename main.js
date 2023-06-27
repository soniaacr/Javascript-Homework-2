//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function display(){
    const person3 = {
        pizza:["Deep Dish","South Side Thin Crust"],
        tacos:"Anything not from Taco bell",
        burgers:"Portillos Burgers",
        ice_cream:["Chocolate","Vanilla","Oreo"],
        shakes:[{
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }]
    }
    for(const [key, value] of Object.entries(person3)){
        console.log(value)
    }
}
console.log(display())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    Person.prototype.incrementAge = () => {
        this.age++;
    }
}
var sonia = new Person('Sonia', 27)
sonia.printInfo()

var destiny = new Person('Destiny', 19)
destiny.printInfo()
destiny.incrementAge()
destiny.incrementAge()
destiny.incrementAge()
destiny.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function strLength(str) {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve("Big word")
        } else{
            reject("Small Number");
        }
    })
}

strLength("I want an oreo milkshake")
    .then(result => console.log(result))
    .catch(error => console.log(error));

strLength("Chocolate please")
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Codewars Question 1:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(domain) {
    const a = document.createElement('a');
    a.href = domain;
    const { hostname } = a;
    const hostSplit = hostname.split('.');
    hostSplit.pop();
    if (hostSplit.length > 1) {
      hostSplit.shift();
    }
    return hostSplit.join();
  }

// Codewars Question 2:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.  

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }