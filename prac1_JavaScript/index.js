console.log("Hello World");



// Task 1: Variables and Data Types

var Name = "John";
let Number = 10;
const PI = 3.14;

console.log(Name);
console.log(Number);
console.log(PI);


// Task 2: Operators and Expressions

let calc = function (num1, num2) {
    return {
        add: num1 + num2,
        sub: num1 - num2,
        mul: num1 * num2,
        div: num1 / num2,
    }
}

console.log(calc(10, 5));


// Task 3: Control Flow

let getage = function () {
    var age = document.getElementById("id_Age").value;
    // age = parseInt(age);
    if (age < 18) {
        alert("You are a minor");
    } else if (age >= 18 && age < 65) {
        alert("You are an adult");
    } else {
        alert("You are a senior citizen");
    }
}


// Task 4: Functions

let getMinMaxSalary = function (salaries) {

    let min = salaries[0];
    let max = salaries[0];
    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] < min) {
            min = salaries[i];
        }
        if (salaries[i] > max) {
            max = salaries[i];
        }
    }
    return {
        min: min,
        max: max
    };
}

let salaries = [1000, 500, 2000, 3000, 4000, 6000, 7000, 8000, 9000, 10000];
console.log(getMinMaxSalary(salaries));


// Task 5: Arrays and Objects

let displayFavBooks = function (books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }
}


// Task 6: Scope and Hoisting

// let ScopeandHoisting = function () {
//     let vara = 100;
//     var varb = 200;
//     const varc = 300;
// }

// console.log(vara);
// console.log(varb);
// console.log(varc);

// Task 7: DOM Manipulation

var button = document.getElementById("myButton");

button.addEventListener("click", function () {
    button.textContent = "Button Clicked!";
});


// Task 8: Error Handling


function checkPositiveNumber(number) {
    if (number < 0) {
        throw new Error("Number must be positive.");
    }

    return number;
}

try {
    var result = checkPositiveNumber(-5);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

// Task 9: Asynchronous JavaScript

function asyncFunction(callback) {
    setTimeout(function () {

        var result = "Operation completed.";

        callback(result);
    }, 10000    );
}

function callback(result) {
    console.log("Result:", result);
}

console.log("Starting asynchronous operation...");
asyncFunction(callback);
console.log("Asynchronous operation initiated.")