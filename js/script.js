var jsonData = {
  pixel_5: {
    id: "pixel_5",
    image: "pixel_5.jpeg",
    name: "Pixel 5",
    price: "$ 499",
    feature: "Smart, Powerful, Helpful",
    rating: "1.2k",
    color: ["Black", "White", "Blue"],
    display: [
      "Full-screen 6.1-inch (156 mm)1 display, up to 60 Hz",
      "20:9 aspect ratio",
      "FHD+ (1080 x 2400) OLED at 429 ppi",
      "Corning® Gorilla® Glass 3™ cover glass",
      "Always-on display with At a Glance and Now Playing",
    ],
    dimension: [
      "6. heightt x 2.8 width x 0.35 depth (in)",
      "152.2 height x 71.8 width x 8.9 depth (mm)",
      "6.3 oz",
      "178 g",
    ],
    battery: [
      "Over 24-hour battery life3",
      "Up to 72-our battery life with Extreme Battery-Saver",
      "Typical 4410 mAh",
      "Fast Charging",
    ],
    memory: "6 GB LPDDR5 RAM",
    storage: "128 GB storage UFS 3.1 storage",
  },
  pixel_6: {
    id: "pixel_6",
    image: "pixel_6.jpg",
    name: "Pixel 6",
    price: "$ 699",
    feature: "Smart",
    rating: "1.2k",
    color: ["Black", "White", "Blue"],
    display: [
      "Full-screen 6.1-inch (156 mm)1 display, up to 60 Hz",
      "20:9 aspect ratio",
      "FHD+ (1080 x 2400) OLED at 429 ppi",
      "Corning® Gorilla® Glass 3™ cover glass",
      "Always-on display with At a Glance and Now Playing",
    ],
    dimension: [
      "6. heightt x 2.8 width x 0.35 depth (in)",
      "152.2 height x 71.8 width x 8.9 depth (mm)",
      "6.3 oz",
      "178 g",
    ],
    battery: [
      "Over 24-hour battery life3",
      "Up to 72-our battery life with Extreme Battery-Saver",
      "Typical 4410 mAh",
      "Fast Charging",
    ],
    memory: "6 GB LPDDR5 RAM",
    storage: "128 GB storage UFS 3.1 storage",
    processor: "Google Tensor Titan M2 security coprocessor",
  },

  pixel_6_pro: {
    id: "pixel_6_pro",
    image: "pixel_6pro.jpg",
    name: "Pixel 6 Pro",
    price: "$ 799",
    feature: "Powerful, Helpful",
    rating: "1.2k",
    color: ["Black", "White", "Blue"],
    display: [
      "Full-screen 6.1-inch (156 mm)1 display, up to 60 Hz",
      "20:9 aspect ratio",
      "FHD+ (1080 x 2400) OLED at 429 ppi",
      "Corning® Gorilla® Glass 3™ cover glass",
      "Always-on display with At a Glance and Now Playing",
    ],
    dimension: [
      "6. heightt x 2.8 width x 0.35 depth (in)",
      "152.2 height x 71.8 width x 8.9 depth (mm)",
      "6.3 oz",
      "178 g",
    ],
    battery: [
      "Over 24-hour battery life3",
      "Up to 72-our battery life with Extreme Battery-Saver",
      "Typical 4410 mAh",
      "Fast Charging",
    ],
    memory: "6 GB LPDDR5 RAM",
    storage: "128 GB storage UFS 3.1 storage",
  },
};
var cardLists = document.getElementsByClassName("card");
for (let i = 0; i < cardLists.length; i++) {
  (function (index) {
    cardLists[index].addEventListener("mouseenter", function () {
      hoverFunction(index);
    });
    cardLists[index].addEventListener("mouseleave", function () {
      hoverRemoveFunction(index);
    });
  })(i);
}
function hoverFunction(i) {
  var featureSection = cardLists[i].querySelector(
    ".main--para__productFeature"
  );
  var viewProductButton = cardLists[i].querySelector(
    ".main--Button__productViewProduct"
  );
  var buyNowSection = cardLists[i].querySelector(
    ".main--section__productBuyNow"
  );
  var priceAndRatingSection = cardLists[i].querySelector(
    ".main--section__productPriceAndRating"
  );
  var originalFeatures = featureSection.innerHTML;
  var productsGrid = cardLists[i].querySelector(
    ".main--section__productDetailsGrid"
  );
  featureSection.classList.add("hidden");
  viewProductButton.classList.add("hovered");
  featureSection.innerHTML = viewProductButton.outerHTML;
  viewProductButton.classList.remove("hovered");
  buyNowSection.classList.add("hovered");
  featureSection.classList.remove("hidden");
  productsGrid.removeChild(priceAndRatingSection);
  productsGrid.appendChild(buyNowSection);
}
function hoverRemoveFunction(i) {
  var featureSection = cardLists[i].querySelector(
    ".main--para__productFeature"
  );
  var viewProductButton = cardLists[i].querySelector(
    ".main--Button__productViewProduct"
  );
  var buyNowSection = cardLists[i].querySelector(
    ".main--section__productBuyNow"
  );
  var priceAndRatingSection = cardLists[i].querySelector(
    ".main--section__productPriceAndRating"
  );
  var originalFeatures = featureSection.innerHTML;
  var productsGrid = cardLists[i].querySelector(
    ".main--section__productDetailsGrid"
  );
  viewProductButton.classList.remove("hovered");
  featureSection.innerHTML = originalFeatures;
  buyNowSection.classList.remove("hovered");
  priceAndRatingSection.classList.remove("hidden");
  productsGrid.removeChild(buyNowSection);
  productsGrid.appendChild(priceAndRatingSection);
}
// Access the card elements var cardLists = document.getElementsByClassName("card");
// for (var i = 0; i < cardLists.length; i++) {
//   var card = cardLists[i];
//   // Access the product details within the card element
//   var productTitle = card.querySelector(".main--para__productTitle");
//   var productFeature = card.querySelector(".main--para__productFeature");
//   var productPrice = card.querySelector(".main--para__productPrice");
//   var productRating = card.querySelector(".main--para__productRating");
//   // Update the product details using the jsonData
//   var product = jsonData;
//   productTitle.textContent = product.pixel_5.name;
//   productFeature.textContent =  product.pixel_5.feature;
//   productPrice.textContent =  product.pixel_5.price;
//   productRating.textContent =  product.pixel_5.rating;
// }
