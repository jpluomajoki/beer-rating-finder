console.log("content script loaded");
const products = Array.from(
  document.getElementsByClassName("product-data-container")
);
console.log(products);

const beerElements = products.filter(
  (product) =>
    JSON.parse(product.getAttribute("data-product-data")).category === "Oluet"
);
console.log(beerElements);
console.log(`found ${beerElements.length} beers`);

beerElements.forEach((elem) => {
  const scoreDiv = document.createElement("div");
  const imgEl = document.createElement("img");
  // TODO: Fix icon styling
  imgEl.src = chrome.extension.getURL("icons/beer_32.png");
  // TODO: Add onclick functionality to search for a beer
  scoreDiv.appendChild(imgEl);
  elem.appendChild(scoreDiv);
});
