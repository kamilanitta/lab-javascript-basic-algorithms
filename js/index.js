// Iteration 1: Names and Input
let hacker1 = "Rafael";
let hacker2 = "Kamila";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let nameCapital = hacker1.toUpperCase();
let name1 = "";

for (let i = 0; i < nameCapital.length; i++) {
  if (i < nameCapital.length - 1) {
    name1 += nameCapital[i] + " ";
  } else {
    name1 += nameCapital[i];
  }
}

console.log(name1);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  if (navigatorReversed.length !== hacker2.length - 1)
    navigatorReversed += hacker2[i];
  else navigatorReversed += hacker2[i].toUpperCase();
}
console.log(`navigatorReversed: ${navigatorReversed}`);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1 < hacker2) {
  console.log("hacker1 goes first");
} else if (hacker1 > hacker2) {
  console.log("hacker2 goes first");
} else {
  console.log("You have same names?");
}
