console.log("h3llo script.js file is loaded....");


document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const avatarButton = document.getElementById("avatar-button");
  const popover = document.getElementById("popover");

  console.log(username+" "+email+" "+password);  
  if(username!==null){
  const firstCharacter = username[0].toUpperCase();
  document.getElementsByClassName("header--btn__accountCreate")[0].textContent = firstCharacter;
  }

  avatarButton.addEventListener("click", function() {
    popover.style.display = popover.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function(event) {
    if (!popover.contains(event.target) && event.target !== avatarButton) {
      popover.style.display = "none";
    }
  });
});



var jsonData = {
  pixel_5: {
    id: "pixel_5",
    image: "assets/pixel_5.jpeg",
    otherColor: "assets/pixel5_othercolor1.jpg",
    model: "5",
    name: "Pixel 5",
    serialNo: "SKU12345-12",
    price: "$ 499",
    priceInNumber: 499,
    feature: "Smart, Powerful, Helpful",
    rating: "1.2k",
    ratingInNo: 3.5,
    color: ["Black", "White", "Blue"],
    backgroundColor: "#E3F7F4",
    display: [
      "Full-screen 6.1-inch (156 mm)1 display, up to 60 Hz",
      "20:9 aspect ratio",
      "FHD+ (1080 x 2400) OLED at 429 ppi",
      "Corning® Gorilla® Glass 3™ cover glass",
      "Always-on display with At a Glance and Now Playing",
    ],
    dimension: [
      "6.0 heightt x 2.8 width x 0.35 depth (in)",
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
    model: "6",
    image: "assets/pixel_6.jpg",
    otherColor: "assets/pixel6_othercolor1.jpg",
    name: "Pixel 6",
    serialNo: "RKM45678-45",
    price: "$ 699",
    priceInNumber: 699,
    feature: "Smart",
    rating: "1.2k",
    ratingInNo: 4,
    color: ["Black", "White", "Blue"],
    backgroundColor: "#EBF5F3",
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
    model: "6 pro",
    image: "assets/pixel_6pro.jpg",
    otherColor: "assets/pixel6pro_othercolor1.jpg",
    name: "Pixel 6 Pro",
    serialNo: "PIX78912-78",
    price: "$ 799",
    priceInNumber: 799,
    feature: "Powerful, Helpful",
    rating: "1.2k",
    ratingInNo: 4.5,
    color: ["Black", "White", "Blue"],
    backgroundColor: "#F7F7ED",
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

const container = document.getElementById("main--section__subSection2");

// Loop to repeat the section nine times
for (let i = 0; i < 9; i++) {
  // Create a new section element
  const section = document.createElement("section");
  section.className = "main--section__subSection2";

  // Set the HTML content of the section
  section.innerHTML = `
    <!--Individual product section of each mobile models-->
    <div class="full_carde">
      <img
        class="main--section__productImages"
        src="assets/pixel_5.jpeg"
        alt="pixel-5--img"
      />
      <div class="main--section__productDetails mt-3">
        <div class="main--section__productDetailsGrid">
          <div>
            <p class="main--para__productTitle" style="text-align: left">
              Pixel 5
            </p>
            <p class="main--para__productFeature" style="text-align: left">
              Smart, Powerful, Helpful
            </p>
            <a
              href="#"
              class="main--Button__productViewProduct"
              data-bs-toggle="modal"
              data-bs-target="#viewProductModal"
              style="text-align: left"
            >
              View Product
            </a>
          </div>
          <div class="main--section__productPriceAndRating">
            <p class="main--para__productPrice" style="text-align: right">
              $ 499
            </p>
            <div class="main--para__productRating">
             1.2 rating / 5
             </div>
          </div>
          <div class="main--section__productBuyNow">
            <button
              class="btn btn-info main--Button__buyNow"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style="text-align: right"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of individual products -->
  `;

  // Append the section to the container
  if (container) container.appendChild(section);
}
const cardSection = document.getElementById("main--section__withFooter");
const footer = document.createElement("footer");
footer.className = "footer--section__endOfProduct mt-3 text-center";
footer.innerHTML = `
<div>
  <img src="assets/icons8-multiple-stars1.png" alt="star image 1" />
  <p style="color: #b3c1c8; display: inline" class="footer--para__endOfProduct mx-1">
    Product end here
  </p>
  <img src="assets/icons8-multiple-stars2.png" alt="star image 2" />
</div>
`;
if (cardSection) cardSection.appendChild(footer);

var cardLists = document.getElementsByClassName("full_carde");

// Extracting the desired key-value pair
// For pixel 5
for (i = 0; i < 9; i++) {
  var pixel = 0;
  if (i === 0 || i === 5 || i === 6) {
    pixel = jsonData.pixel_5;
  } else if (i === 1 || i === 4 || i === 7) {
    pixel = jsonData.pixel_6;
  } else if (i === 2 || i === 3 || i === 8) {
    pixel = jsonData.pixel_6_pro;
  }
  const Name = pixel.name;
  const Price = pixel.price;
  const Feature = pixel.feature;
  const Rating = pixel.rating;
  const ImageUrl = pixel.image;
  const backgroundColor = pixel.backgroundColor;
  const RatingInNo = pixel.ratingInNo;

  // Manipulating the DOM
  const image = document.getElementsByClassName("main--section__productImages")[
    i
  ];
  if (image) {
    image.setAttribute("src", ImageUrl);
    image.style.backgroundColor = backgroundColor;
  }
  const title = document.getElementsByClassName("main--para__productTitle")[i];
  if (title) title.textContent = Name;

  const price = document.getElementsByClassName("main--para__productPrice")[i];
  if (price) price.textContent = Price;

  const rating = document.getElementsByClassName("main--para__productRating")[
    i
  ];
  // Calculate the number of full stars and half stars
  const fullStars = Math.floor(RatingInNo);
  const hasHalfStar = RatingInNo % 1 !== 0;

  // Create HTML for full stars
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML +=
      '<img src="assets/full star.png" alt="Full Star" class="rating-image">';
  }

  // Add half star if applicable
  if (hasHalfStar) {
    starsHTML +=
      '<img src="assets/half star.png" alt="Half Star" class="half-rating-image">';
  }
  starsHTML += '<p class="rating--para__noOfReviews"> (1.2k) </p>';
  if (rating) rating.innerHTML = starsHTML;

  const feature = document.getElementsByClassName("main--para__productFeature")[
    i
  ];
  if (feature) feature.textContent = Feature;

  const button = document.getElementsByClassName("main--Button__buyNow")[i];
  const jsonString = JSON.stringify(pixel);
  if (button) button.setAttribute("data-bs-model", jsonString);

  const viewProduct = document.getElementsByClassName(
    "main--Button__productViewProduct"
  )[i];
  const jsonStringForViewing = JSON.stringify(pixel);
  if (viewProduct)
    viewProduct.setAttribute("data-bs-model", jsonStringForViewing);
}

for (var i = 0; i < cardLists.length; i++) {
  (function (index) {
    var featureSection = cardLists[index].getElementsByClassName(
      "main--para__productFeature"
    )[0];
    var viewProductButton = cardLists[index].getElementsByClassName(
      "main--Button__productViewProduct"
    )[0];
    var buyNowSection = cardLists[index].getElementsByClassName(
      "main--section__productBuyNow"
    )[0];
    var priceAndRatingSection = cardLists[index].getElementsByClassName(
      "main--section__productPriceAndRating"
    )[0];
    var originalFeatures = featureSection.innerHTML;
    var productsGrid = cardLists[index].getElementsByClassName(
      "main--section__productDetailsGrid"
    )[0];

    cardLists[index].addEventListener("mouseenter", function () {
      hoverFunction(index);
    });
    cardLists[index].addEventListener("mouseleave", function () {
      hoverRemoveFunction(index);
    });

    function hoverFunction(i) {
      featureSection.classList.add("hidden");
      viewProductButton.classList.add("hovered");
      featureSection.innerHTML = viewProductButton.outerHTML;
      viewProductButton.classList.remove("hovered");
      buyNowSection.classList.add("hovered");
      featureSection.classList.remove("hidden");
      if (productsGrid) {
        productsGrid.removeChild(priceAndRatingSection);
        productsGrid.appendChild(buyNowSection);
      }
    }

    function hoverRemoveFunction(i) {
      viewProductButton.classList.remove("hovered");
      featureSection.innerHTML = originalFeatures;
      buyNowSection.classList.remove("hovered");
      priceAndRatingSection.classList.remove("hidden");
      productsGrid.removeChild(buyNowSection);
      productsGrid.appendChild(priceAndRatingSection);
    }
  })(i);
}

const exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-model");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.
    const parsedObject = JSON.parse(recipient);
    console.log(parsedObject);
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title");
    modalTitle.textContent = `Buy ${parsedObject.name}`;

    const modalImage = exampleModal.querySelector(".modal--image");
    modalImage.setAttribute("src", parsedObject.image);

    const modalProductName = exampleModal.querySelector(".modal--para__title");
    modalProductName.textContent = parsedObject.name;

    const modalProductSerialNo = exampleModal.querySelector(
      ".modal--para__serialNo"
    );
    modalProductSerialNo.textContent = parsedObject.serialNo;

    const modalProductPrice = exampleModal.querySelector(".modal--para__price");
    modalProductPrice.textContent = parsedObject.price + ".00";

    const modalSummaryActual = exampleModal.querySelector(
      ".modal__summaryItemsActual"
    );
    modalSummaryActual.textContent =
      "$ " + (parseInt(parsedObject.priceInNumber) + 60);

    const modalSummaryBilling = exampleModal.querySelector(
      ".modal__summaryItemsBilling"
    );
    modalSummaryBilling.textContent = parsedObject.price + ".00";

    const modalSummaryTotal = exampleModal.querySelector(
      ".modal__summaryTotalValue"
    );
    modalSummaryTotal.textContent = parsedObject.price + ".00";

    const modalSummaryPayNow = exampleModal.querySelector(
      ".modal--button__payNow"
    );
    modalSummaryPayNow.textContent = parsedObject.price + ".00";
  });
}

const viewProductModal = document.getElementById("viewProductModal");
if (viewProductModal) {
  viewProductModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const recipient = button.getAttribute("data-bs-model");
    const parsedObject = JSON.parse(recipient);
    console.log(parsedObject);

    const modalTitle = viewProductModal.querySelector(
      ".viewProduct--modal__title"
    );
    modalTitle.textContent = parsedObject.name;

    const carouselImage = viewProductModal.querySelector(".carousel--image");
    carouselImage.setAttribute("src", parsedObject.image);

    const carouselImage2 = viewProductModal.querySelector(".carousel--image2");
    carouselImage2.setAttribute("src", parsedObject.otherColor);

    const modalPrice = viewProductModal.querySelector(
      ".viewProduct--footer__price"
    );
    modalPrice.textContent = parsedObject.price;

    const carouselBuyNow = viewProductModal.querySelector(
      ".viewProduct--button__buyNow"
    );
    carouselBuyNow.setAttribute("data-bs-model", recipient);

    const rating = viewProductModal.querySelector(
      ".viewProduct--footer__rating"
    );
    const RatingInNo = parsedObject.ratingInNo;
    const fullStars = Math.floor(RatingInNo);
    const hasHalfStar = RatingInNo % 1 !== 0;
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) {
      starsHTML +=
        '<img src="assets/full star.png" alt="Full Star" class="rating-image">';
    }
    // Add half star if applicable
    if (hasHalfStar) {
      starsHTML +=
        '<img src="assets/half star.png" alt="Half Star" class="half-rating-image">';
    }
    starsHTML += '<p class="rating--para__noOfReviews"> (1.2k) </p>';
    rating.innerHTML = starsHTML;
  });
}

// modal--button__payNow
function updateSelectedCity(city) {
  var selectedCityElement = document.getElementById("selectedCity");
  selectedCityElement.value = city;
  selectedCityElement.textContent = city;
  selectedCityElement.classList.add("custom-style");
}
function updateSelectedCountry(country) {
  var selectedCountryElement = document.getElementById("selectedCountry");
  selectedCountryElement.value = country;
  selectedCountryElement.textContent = country;
  selectedCountryElement.classList.add("custom-style");
}

const saveAddress = document.getElementsByClassName(
  "modal--para__saveAddress"
)[0];
if (saveAddress) {
  saveAddress.addEventListener("click", (event) => {
    // Button that triggered the modal
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("selectedCity").value;
    const country = document.getElementById("selectedCountry").value;
    console.log(name + phone + address + city + country);

    var addressToShow = "";
    if (city !== undefined) addressToShow += ", " + city;
    if (country !== undefined) addressToShow += ", " + country;
    document.getElementById("nameShow").value = name;
    document.getElementById("phoneShow").value = phone;
    document.getElementById("addressShow").value = address + addressToShow;
    document.getElementById("nameShow").textContent = name;
    document.getElementById("phoneShow").textContent = phone;
    document.getElementById("addressShow").textContent =
      address + addressToShow;

    const customerSectionEditable = document.getElementsByClassName(
      "modal--section__customerEditable"
    )[0];
    customerSectionEditable.style.display = "none";

    const customerSectionNotEditable = document.getElementsByClassName(
      "modal--section__customerNotEditable"
    )[0];
    customerSectionNotEditable.style.display = "block";
  });
}

const editAddress = document.getElementsByClassName("modal--button__edit")[0];
if (editAddress) {
  editAddress.addEventListener("click", (event) => {
    const customerSectionEditable = document.getElementsByClassName(
      "modal--section__customerEditable"
    )[0];
    customerSectionEditable.style.display = "block";

    const customerSectionNotEditable = document.getElementsByClassName(
      "modal--section__customerNotEditable"
    )[0];
    customerSectionNotEditable.style.display = "none";
  });
}

const headerSectionItems = document.getElementsByClassName(
  "header--section__items"
);
Array.from(headerSectionItems).forEach(function (item) {
  item.addEventListener("click", function () {
    removeHeaderSectionItems();
    this.classList.add("clicked");
  });
});

function removeHeaderSectionItems() {
  Array.from(headerSectionItems).forEach(function (item) {
    item.classList.remove("clicked");
  });
}
