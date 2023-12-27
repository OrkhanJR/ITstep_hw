const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let charactersName = document.querySelector(".characters");

let info = {};

async function fetchCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  info = data.info;
  charactersName.textContent = data.results.map((character) => character.name);
}

prevButton.addEventListener("click", async () => {
  if (info.prev) {
    await fetchCharacters(info.prev);
  } else {
    charactersName.textContent = "this is the first page";
  }
});

nextButton.addEventListener("click", async () => {
  if (info.next) {
    await fetchCharacters(info.next);
  } else {
    charactersName.textContent = "this is the last page";
  }
});

fetchCharacters("https://rickandmortyapi.com/api/character");
