async function getHeroData() {
  const heroImageDataRaw = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=RzSVtSdYidZJNaO9QVhh5eYS5z25ECPuZsp5gLid"
  );
  const heroImageData = await heroImageDataRaw.json();
  // ctrl shift l
  // console.log("image: ", image);

  return heroImageData;
}

function setHeroImageUrl(urlToChange) {
  const heroImage = document.querySelector("#hero-image");

  if (heroImage) {
    heroImage.src = urlToChange;
  }
}

function setHeroDescription(descriptionToChange) {
  const heroDescription = document.querySelector("#hero-description");

  if (heroDescription) {
    heroDescription.innerText = descriptionToChange;
  }
}

async function init() {
  const heroImageData = await getHeroData();

  setHeroImageUrl(heroImageData.url);
  setHeroDescription(heroImageData.explanation);
}

init();
