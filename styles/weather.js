function exercisePrompt() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let membership = prompt(
    "Which exercise do you prefer — cardio, weights, or pilates?"
  );
  alert(`Thanks ${name}! We'll send ${membership} info to ${email}.`);
}

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

const apiKey = "YOUR_API_KEY";
function searchCity() {
  const city = document.getElementById("city-input").value.trim();
  if (!city) return;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios
    .get(apiUrl)
    .then(displayWeather)
    .catch(() => {
      alert("City not found. Please try again.");
    });
}

function displayWeather(response) {
  const data = response.data;
  document.getElementById("city").textContent = data.name;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById("temperature").textContent =
    Math.round(data.main.temp) + "°F";
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Wind: ${Math.round(
    data.wind.speed
  )} mph`;
}
