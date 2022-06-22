const NUMBER_OF_GALLERY_ITEMS = 20;

function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed();
}

async function getGalleryData() {
  const galleryDataRaw = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=RzSVtSdYidZJNaO9QVhh5eYS5z25ECPuZsp5gLid"
  );
  const galleryData = await galleryDataRaw.json();

  const galleryItems = [];

  for (let index = 0; index < NUMBER_OF_GALLERY_ITEMS; index++) {
    const randomIndex = getRandomNumber(0, galleryData.photos.length);
    galleryItems.push(galleryData.photos[randomIndex]);
  }

  return galleryItems;
}

function addGalleryElements(galleryItems) {
  const galleryContainer = document.querySelector("#gallery-container");

  if (galleryContainer) {
    galleryItems.forEach((item) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      const wrapper = document.createElement("div");
      wrapper.classList.add("image-wrapper");

      const imageElement = document.createElement("img");
      imageElement.src = item.img_src;
      imageElement.alt = "Mars picture";
      imageElement.classList.add("gallery-image");

      wrapper.appendChild(imageElement);
      slide.appendChild(wrapper);
      galleryContainer.appendChild(slide);
    });

    const swiper = new Swiper(".swiper", {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

async function init() {
  const galleryItems = await getGalleryData();

  addGalleryElements(galleryItems);
}

init();
