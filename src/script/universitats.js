const searchInput = document.getElementById("searchUni");
const cityFilter = document.getElementById("cityFilter");
const typeFilter = document.getElementById("typeFilter");

const cards = document.querySelectorAll(".uni-card");

function filterUniversities() {
  let text = searchInput.value.toLowerCase();
  let city = cityFilter.value;
  let type = typeFilter.value;

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    let c = card.dataset.city;
    let t = card.dataset.type;

    let match =
      name.includes(text) &&
      (city === "" || city === c) &&
      (type === "" || type === t);

    card.style.display = match ? "block" : "none";
  });
}

searchInput.oninput = filterUniversities;
cityFilter.onchange = filterUniversities;
typeFilter.onchange = filterUniversities;
