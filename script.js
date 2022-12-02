let x ="10";

let y =10;
// discount is whatever I decide it to be when. icall you function

function printPriceAfterDiscount(discountAmount, productCost){
    
    let x = productCost * discountAmount;
    productCost = productCost - (x/100); 


    return productCost;
}



console.log(printPriceAfterDiscount(30,100));

const person = {
    firstName: "mike",
    lastName: "jones",
    age: 50,
    eyeColor: "brown",
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    }
}

console.log(person.fullName());
console.log(person.firstName);

const whips = ['bmw', 'benz', 'bentley'];

// console.log(whips[1]);

const bill = [10.0, 45.0, 25.0]

function calculateTotalBill(bill){
    let total = 0;
    for(var x = 0; x < bill.length; x++){
        total = total + bill[x];
        console.log(total)
    }
}

var car = "porsche"

var model = "911GT3";

function transform(){
    var model = "Macan GTS";
    console.log(model);
}

console.log(model);
transform();
 console.log(model);
// //the macan is only accesssable within the function scope making it not a global variable.

var hasTurbo = true;

// // Initialize a global variable
let models = "hurrican";

if (hasTurbo) {
  // Initialize a block-scoped variable
  let models = "reventon";
  console.log(`${models}`);
}

// console.log(`${models}`);

// Attempt to use a variable before declaring it
// console.log(x);

// Variable assignment
// var x = 100;

//doesnt work because variable is assigned after logging it.

//Initialize gimli object
const honda = {
	name: "Accord",
	color: "Black",
	modele: "sport",
	pullUp: function() {
		return `this car is ${this.modele}!`;
	},
};

console.log(honda);

console.log(honda.color);
console.log(honda.modele);

console.log(honda.pullUp());

// Assign the five oceans
let CarModels = [
	"BMW",
	"HONDA",
	"TOYOTA",
	"NISSAN",
	"FERRARI",
];

console.log(CarModels[2]);


let planets = [
	"Saturn",
	"Uranus",
	"Neptune",
];

console.log(planets);

let nestedArray = [
	[
		"chicken",
		"turkey",
	],
	[
		"beef",
		"lamb",
	]
];

console.log(nestedArray[1][0]);


let seaCreatures = [
	"land octopus",
	"air squid",
	"grassy shark",
	"brazillian seahorse",
	"patrick starfish",
];

//seaCreatures.push(" ");

//adds a object to the array 

for(let i = 0; i < seaCreatures.length; i++){
	console.log(i, seaCreatures[i]);
}

const city = {
	NYC: "Manhattan",
	Maryland: "Baltimore",
	Illinois: "Chicago"
}

// Print property names of object
for (attribute in city) {
	console.log(attribute);
}

// Print property values of object
for (attribute in city) {
	console.log(city[attribute]);
}

// Print names and values of object properties
for (attribute in city) {
	console.log(`${attribute}`.toUpperCase() + `: ${city[attribute]}`);
}

function greet(){
	console.log("Hello world");
}


// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
// multiply(30, 4);


const add = (x, y) => {
	return x + y;
}


class Hero{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
	greet(){
		return `${this.name} says hello.`;
	}
	throatPunch(){
		return `${this.name} gets punched in the throat`;
	}
	
	
}

// Hero.prototype.greet = function(){
// 	return `${this.name} says hello.`;
// }



const hero1 = new Hero(`Saad`, 3);
console.log(hero1);




// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// Initialize an object
const employees = {
	boss: 'Saad',
	secretary: 'Isaiah',
	sales: 'Kyle',
	accountant: 'Shawn'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});

// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);
const values = Object.values(employees);
console.log(values);

const entries = Object.entries(employees);
console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

// Initialize an object
const name = {
    firstName: 'Saad',
    lastName: 'Masood'
};

// Initialize another object
const details = {
    job: 'Software Engineeer',
    employer: 'JP Morgan'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);


// Initialize an object
const user = {
	username: 'Smasood',
	password: '1235'
};

// Freeze the object
// const newUser = Object.freeze(user);

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

const note = {
	id: 1,
	title: 'rip gucci',
	date: '01/01/1998',
	author: {
		firstName: 'Saad',
		lastName: 'Masood',
	  },
  }

// Create variables from the Object properties
// const id = note.id
// const title = note.title
// const date = note.date

// Destructure properties into variables
// const { id, title, date } = note

// console.log(id)
// console.log(title)
// console.log(date)



//   Destructure nested properties
// const {
// 	id,
// 	title,
// 	date,
// 	author: { firstName, lastName },
//   } = note

  //console.log(`${firstName} ${lastName}`)

  const date = ['1998', '01', '07']

  //Create variables from the Array items
// const year = date[0]
// const month = date[1]
// const day = date[2]

// Destructure Array values into variables
// const [year, month, day] = date

// console.log(year)
// console.log(month)
// console.log(day)

// Skip the second item in the array
const [year, , day] = date

console.log(year)
console.log(day)

const printNumbers = {
	phrase: 'The current value is:',
	numbers: [1, 2, 3, 4],
  
	loop() {
	  this.numbers.forEach((number) => {
		console.log(this.phrase, number)
	  })
	},
  }
  
  printNumbers.loop();

//   ---------------------EVENT LOOP-------------------------

// Define three example functions
function first() {
	console.log(1)
  }
  
  function second() {
	console.log(2)
  }
  
  function third() {
	console.log(3)
  }

  // Execute the functions
first()
second()
third()

const promise = new Promise((resolve, reject) => {
	resolve('We did it!')
  })