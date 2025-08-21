function runExercises() {
  let output = "";

  const BASE_NUMBER = 10;
  let name = document.getElementById("nameInput").value;
  let userNumber = parseInt(document.getElementById("numberInput").value, 10);
  let sentence = document.getElementById("sentenceInput").value;
  let fruits = [
    document.getElementById("fruit1").value,
    document.getElementById("fruit2").value,
    document.getElementById("fruit3").value
  ];

  let sum = BASE_NUMBER + userNumber;
  let diff = BASE_NUMBER - userNumber;
  let prod = BASE_NUMBER * userNumber;
  let quot = (userNumber !== 0) ? (BASE_NUMBER / userNumber).toFixed(2) : "undefined";

  output += `Hello, ${name}!\n`;
  output += `Base number = ${BASE_NUMBER}, Your number = ${userNumber}\n`;
  output += `Sum: ${sum}, Difference: ${diff}, Product: ${prod}, Quotient: ${quot}\n\n`;

  output += `Original: ${sentence}\n`;
  output += `Uppercase: ${sentence.toUpperCase()}\n`;
  output += `Lowercase: ${sentence.toLowerCase()}\n\n`;

  if (userNumber >= 0) {
    output += `Using if: Your number is positive or zero.\n`;
  } else {
    output += `Using if: Your number is negative.\n`;
  }
  output += `Using ternary: Your number is ${userNumber >= 0 ? "positive/zero" : "negative"}.\n\n`;

  output += "For loop (1 to your number): ";
  for (let i = 1; i <= userNumber; i++) {
    output += i + " ";
  }
  output += "\n";

  output += "While loop (countdown from 5): ";
  let count = 5;
  while (count > 0) {
    output += count + " ";
    count--;
  }
  output += "\n\n";

  function greetUser(userName) {
    return `Hello, ${userName}!`;
  }
  output += greetUser(name) + "\n";

  output += "Your favorite fruits are: " + fruits.join(", ") + "\n";

  document.getElementById("output").innerText = output;
}
