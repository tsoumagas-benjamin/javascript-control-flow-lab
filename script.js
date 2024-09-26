let number = 7;
let day = 3;

//If-else
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Switch
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

//Loops
for (let i = 1; i < 6; i++){
    console.log(i);
}

let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j < 6);

//Control flow with break and continue
let x = 1;
while (x < 6) {
    console.log(x);
    x++;
    if (x === 3){
        break;
    }
}

for (let y = 1; y < 6; y++){
    if (y === 3){
        continue;
    }
    console.log(y);
}

//Scope and context
let a = "Global";

function firstScope() {
    let b = "This is the first scope";
    console.log(a);
    console.log(b);
}

function secondScope() {
    // console.log(b); // Cannot access this yet
    let b = "This is the second scope"; // We are able to initialize and assign b
    console.log(a);
    console.log(b);
}

firstScope();
secondScope();