function recipePrompt() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email?");
  let answer = prompt("Would you like to receive easy recipes?");
  if (answer.toLowerCase().includes("yes")) {
    alert(`Yay, ${name}! Recipes are on the way to ${email}.`);
  } else {
    alert(`No problem, ${name}! Enjoy exploring.`);
  }
}
