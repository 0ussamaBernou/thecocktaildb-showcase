
function fetchDrink() {
  hero.innerHTML = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      data.drinks.forEach((drink) => {
        hero.innerHTML += `<div class="drink" data-drink style="background-image: url('${drink.strDrinkThumb}');"></div>`;
      });
    })
    .catch((err) => {
      console.error(err);
    });
    const drinkDivs = document.querySelectorAll("[data-drink]");
  }
  const button = document.querySelector("[data-btn]");
  
  button.addEventListener("click", fetchDrink);
  
  const container = document.querySelector("[data-container]");
  const hero = document.querySelector("[data-hero]");
  const input = document.querySelector("[data-input]");

drinkDivs.forEach( (drinkDiv) => {
   drinkDiv.addEventListener("click", () => {
    drinkDiv.classList.add("active");
    console.log("class added");
  });
   console.log(drinkDiv);
});
