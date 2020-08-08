const products = Array.from(
  document.getElementsByClassName("product-data-container")
);
console.log(products);

const beerElements = products.filter(
  (product) =>
    JSON.parse(product.getAttribute("data-product-data")).category === "Oluet"
);
console.log(beerElements);

beerElements.forEach((elem) => {
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
  scoreDiv.appendChild(imgEl);
  elem.appendChild(scoreDiv);
});
