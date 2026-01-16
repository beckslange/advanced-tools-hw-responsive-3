function exercisePrompt() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let membership = prompt(
    "Which exercise do you prefer — cardio, weights, or pilates?"
  );
  alert(`Thanks ${name}! We'll send ${membership} info to ${email}.`);
}
