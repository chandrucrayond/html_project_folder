var jsonData = {
  pixel_5: {
    id: "pixel_5",
    image: "assets/pixel_5.jpeg",
    name: "Pixel 5",
    price: "$ 499",
    feature: "Smart, Powerful, Helpful",
    rating: "1.2k",
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
    image: "assets/pixel_6.jpg",
    name: "Pixel 6",
    price: "$ 699",
    feature: "Smart",
    rating: "1.2k",
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
    image: "assets/pixel_6pro.jpg",
    name: "Pixel 6 Pro",
    price: "$ 699",
    feature: "Powerful, Helpful",
    rating: "1.2k",
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
              style="text-align: left"
            >
              View Product
            </a>
          </div>
          <div class="main--section__productPriceAndRating">
            <p class="main--para__productPrice" style="text-align: right">
              $ 499
            </p>
            <p class="main--para__productRating" style="text-align: right">
              1.2 rating / 5
            </p>
          </div>
          <div class="main--section__productBuyNow">
            <button
              class="btn btn-info main--Button__buyNow"
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
  container.appendChild(section);
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
cardSection.appendChild(footer);

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

  // Manipulating the DOM
  const image = document.getElementsByClassName("main--section__productImages")[
    i
  ];
  image.setAttribute("src", ImageUrl);
  image.style.backgroundColor = backgroundColor;

  const title = document.getElementsByClassName("main--para__productTitle")[i];
  title.textContent = Name;

  const price = document.getElementsByClassName("main--para__productPrice")[i];
  price.textContent = Price;

  const rating = document.getElementsByClassName("main--para__productRating")[
    i
  ];
  rating.textContent = "⭐⭐⭐⭐(" + Rating + ")";

  const feature = document.getElementsByClassName("main--para__productFeature")[
    i
  ];
  feature.textContent = Feature;
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
      productsGrid.removeChild(priceAndRatingSection);
      productsGrid.appendChild(buyNowSection);
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

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Buy Pixel ${recipient}`
    modalBodyInput.value = recipient
  })
}
