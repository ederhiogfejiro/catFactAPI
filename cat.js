//create an element html
const catFact = document.createElement("h1");

//create a variable for the http fetch address
const baseUrl = "https://catfact.ninja";

//create an alternate variable for baseURL variable
const factUrl = `${baseUrl}/fact`;

//determine your route method
const routeMethod = {
  method: "GET",
  header: {
    Accept: "application/json",
  },
};

//fetch the base API, and set the interval
setInterval(() => {
  fetch(factUrl, routeMethod)
    .then((result) => result.json())
    .then((result) => {
      // add result to the HTML element created
      catFact.innerHTML = `Cat fact of the day: ${result.fact}`;
            //append element created to html body
      document.body.appendChild(catFact);
    })
    .catch((err) => console.error(err));
}, 5000);
