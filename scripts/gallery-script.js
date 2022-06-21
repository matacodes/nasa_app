function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed();
}

async function getGalleryData() {
  const galleryDataRaw = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=RzSVtSdYidZJNaO9QVhh5eYS5z25ECPuZsp5gLid"
  );
  const galleryData = await galleryDataRaw.json();

  const galleryItems = [];

  for (let index = 0; index < 3; index++) {
    const randomIndex = getRandomNumber(0, galleryData.photos.length);
    galleryItems.push(galleryData.photos[randomIndex]);
  }

  return galleryItems;
}

function addGalleryElements(galleryItems) {
  const galleryContainer = document.querySelector("#gallery-container");

  if (galleryContainer) {
    galleryItems.forEach((item) => {
      //   const anchorElement = document.createElement("a");
      //   anchorElement.href = "mars.html";

      const imageElement = document.createElement("img");
      imageElement.src = item.img_src;
      imageElement.alt = "Mars picture";
      imageElement.classList.add("gallery-image");

      //   anchorElement.appendChild(imageElement);

      galleryContainer.appendChild(imageElement);
    });
  }
}

async function init() {
  const galleryItems = await getGalleryData();

  addGalleryElements(galleryItems);
}

init();
