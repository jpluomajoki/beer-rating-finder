const BEER_CATEGORY_TRANSLATIONS = ["Oluet", "Beer", "Öl"];

const products = Array.from(
  document.getElementsByClassName("product-data-container")
);

const beerElements = products.filter((product) => {
  const category = JSON.parse(product.getAttribute("data-product-data"))
    .category;
  return BEER_CATEGORY_TRANSLATIONS.includes(category);
});
console.log(beerElements);

beerElements.forEach((elem) => {
  const beerName = JSON.parse(elem.getAttribute("data-product-data")).name;
  // filter 'can', 'bottle', etc from beer name
  const filteredBeerName = beerName.replace(
    / can| tölkki| burk| bottle| pullo| flaska/gi,
    ""
  );
  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("beer-rating");
  const addToCartVisible = !Array.from(elem.children)
    .find((e) => e.className == "mc-add-to-cart-button")
    .children[0].classList.contains("is-disabled");
  scoreDiv.setAttribute(
    "style",
    `z-index: 2; cursor: pointer; position: absolute; top: 33px; left: ${
      addToCartVisible ? "84px" : "46px"
    }`
  );
  const imgEl = document.createElement("img");
  // TODO: Get better icon
  imgEl.src = chrome.extension.getURL("icons/beer_32.png");
  // TODO: Add onclick functionality to search for a beer
  scoreDiv.onclick = (e) => {
    alert(`You clicked ${filteredBeerName}`);
  };
  scoreDiv.appendChild(imgEl);
  elem.appendChild(scoreDiv);
});
