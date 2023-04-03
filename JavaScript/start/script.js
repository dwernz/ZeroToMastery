// 4 + 3;

// if (4 + 3 == 7) {
//     alert("You're smart!");
// }

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// function sayBye() {
//     console.log("Bye");
// }

// sayBye();

// function sing() {
//     console.log("AHHHHHHH");
//     console.log("TEEEEEE");
// }

// sing();

// function sing2(song) {
//     console.log(song);
// }

// sing2("Country Roads...");

// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "That's too hard";
//     }
//     else {
//         return a * b;
//     }
// }

// console.log(multiply(5, 20));

// var list = ["tiger", "cat", "bear", "bird"];

// var myNewList = list.concat(["monkey"]);

// console.log(myNewList);

//
//
//
// Exercise 8 solution
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.reverse();

// console.log(array);

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1][0]);

// Exercise 8 solution end

// var user = {
//     name: "John",
//     age: 34,
//     hobby: "Soccer",
//     isMarried: false,
// };

// console.log(user);

// Exercise 7
// var user = {
//     username: "daniel",
//     password: "1234"
// };

// var database = [user];

// var newsfeed = [
//     {
//         username: user.username,
//         timeline: "post 1"
//     },
//     {
//         username: database[0].username,
//         timeline: "post 2"
//     },
//     {
//         username: user.username,
//         timeline: "post 3"
//     }
// ];
// // Exercise 7 end

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");

// function signIn(username, password) {
//     if (username == user.username && password == user.password) {
//         console.log(newsfeed);
//     }
//     else {
//         alert("Username or password is incorrect");
//     }
// }

// signIn(userNamePrompt, passwordPrompt);

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study JavaScript",
//     "eat healthy"
// ];

// for (var i = 0; i < todos.length; i++) {
//     todos[i] += "!";
// }

// console.log(todos);

// var counter = 0;
// while (counter < 10) {
//     console.log(counter);
//     counter++;
// }

// var counter = 10;
// do {
//     console.log(counter);
//     counter--;
// } while(counter > 0);

// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);

var database = [
    {
        username: "daniel",
        password: "1234"
    },
    {
        username: "sally",
        password: "1111"
    },
    {
        username: "john",
        password: "2345"
    }
];

var newsfeed = [
    {
        username: "daniel",
        timeline: "post 1"
    },
    {
        username: "sally",
        timeline: "post 2"
    },
    {
        username: "john",
        timeline: "post 3"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++ ) {
        if (database[i].username == username && database[i].password == password ) {
            return true;
        }
    }

    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsfeed);
    }
    else {
        alert("Incorrect username or password");
    }
    
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);