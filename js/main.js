const container = document.querySelector("[data-container]");
const hero = document.querySelector("[data-hero]");
const input = document.querySelector("[data-input]");

function fetchDrink() {
  hero.innerHTML = "";
  let query = input.value.toLowerCase();

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      let drinks = data.drinks;
      // handling null response
      if (!drinks)
        hero.innerHTML = `<h1>Invalid cocktail, try another one :)</h1>`;
      /* images Fetch */
      let drinksHtml = "";
      let drinksNamesHtml = [];

      data.drinks.forEach((drink) => {
        drinksHtml += `<div class="drink" data-drink style="background-image: url('${drink.strDrinkThumb}');"></div>`;
        //adding drink name to image div
        drinksNamesHtml.push(`<h5 class='drink-name'>${drink.strDrink}</h5>`);
      });
      console.log(drinksNamesHtml);
      hero.innerHTML = drinksHtml;
      const drinkDivs = document.querySelectorAll("[data-drink]");
      drinkDivs.forEach((drinkDiv, i) => {
        drinkDiv.addEventListener("click", () => {
          // if the element is already active remove the active class from it
          if (drinkDiv.classList.contains("active")) {
            drinkDiv.classList.remove("active");
          } // make the element active
          else drinkDiv.classList.add("active");
          drinkDivs.forEach((divDrink) => {
            if (divDrink != drinkDiv) {
              divDrink.classList.remove("active");
            }
          });
        });
        drinkDiv.innerHTML = drinksNamesHtml[i];
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
const button = document.querySelector("[data-btn]");

button.addEventListener("click", fetchDrink);
