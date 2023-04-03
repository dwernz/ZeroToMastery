// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// var automatedAnswer = "Your account # is " + 
//     ( isUserValid(false) ? "1234" : "Not available");

// function moveCommand(direction) {
//     var whatHappens;
//     switch(direction) {
//         case "forward":
//             whatHappens = "you encounter a monster";
//             break;
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//         case "right":
//             whatHappens = "you found a river";
//             break;
//         case "left":
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }

//     return whatHappens;
// }

// let + const
// const player = "Bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
//     // wizardLevel = true is only accessible in this if statement.
//     // the wizardLevel would be affected
// }

// can't change obj, but can change the properties.
// const obj = {
//     player: "Bobby",
//     experience: 100,
//     wizardLevel: false,
// };

// // Destructuring
// // Before
// // const player = obj.player;
// // const experience = obj.experience;
// // const wizardLevel = obj.wizardLevel;

// // Same as above
// const {player, experience, wizardLevel} = obj;

// const name = "John Snow";

// const obj = {
//     [name]: "hello",
//     [1 + 2]: 'hihi'
// };

// // obj - 3: "hihi", john snow: "hello"

// const a = "Simon";
// const b = true;
// const c = {};

// const obj2 = {
//     a: a,
//     b: b,
//     c: c,
// };

// // same as obj2
// const obj3 = {
//     a, b, c
// }

// const name = "Sally";
// const age = 34;
// const pet = "horse";

// // Template strings
// // old way
// const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";
// // new way
// const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;

// // default arguments
// function greet(name='', age=30, pet='cat') {
//     return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;
// }

// // greet() will run with Hello  you seem to be 20. What a lovely cat you have.
// // greet("Daniel", 29, "Dog") will run as defined.

// // Symbol
// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// // sym2 != sym3

// // Arrow Functions

// // old way
// // function add(a, b) {
// //     return a + b;
// // }
// // new way
// const add = (a, b) => a + b;

// Before
// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

// After
// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         alert(greet);
//     }
//     return second;
// }
// const newFunc = first();
// newFunc();

// // Closures - a function ran. the function executed. It's never going to execute again
// // BUT it's going to remember that there are references to those variables.
// // SO the child scope always has access to the parent scope.

// // Currying
// const multiply = (a, b) => {
//     return a * b;
// };
// const curriedMultiplied = (a) => (b) => a * b;
// curriedMultiplied(3);
// // will output (b) => a * b;
// curriedMultiplied(3)(4);
// // will output 12