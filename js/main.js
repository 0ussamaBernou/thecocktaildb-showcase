const container = document.querySelector("[data-container]");
const hero = document.querySelector("[data-hero]");
const input = document.querySelector("[data-input]");

function fetchDrink() {
  hero.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      /* images Fetch */
      let drinksHtml = "";
      data.drinks.forEach((drink) => {
        drinksHtml += `<div class="drink" data-drink style="background-image: url('${drink.strDrinkThumb}');"></div>`;
      });
      hero.innerHTML = drinksHtml;
      const drinkDivs = document.querySelectorAll("[data-drink]");
      drinkDivs.forEach((drinkDiv) => {
        drinkDiv.addEventListener("click", () => {
          drinkDiv.classList.add("active");
          console.log("active class added");
          drinkDivs.forEach((divDrink) => {
            if (divDrink != drinkDiv) divDrink.classList.remove("active");
          });
        });
      });
      /* drink name fetch */
      
    })
    .catch((err) => {
      console.error(err);
    });
}
const button = document.querySelector("[data-btn]");

button.addEventListener("click", fetchDrink);
