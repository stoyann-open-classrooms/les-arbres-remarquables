const parseUrl = new URL(window.location.href);
const currentThree = [];
const currentThreePos = [];
const threeEtiquette = parseUrl.searchParams.get("id");

fetch(
  "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
)
  .then((response) => response.json())
  .then((data) => {
    getCurrentThree(data);
    getPositionThree(data);
  });

// recuperer le tableau de donnee de l'arbre courrant

function getCurrentThree(data) {
  for (i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.etiquette === threeEtiquette) {
      currentThree.push(data.features[i].properties);
      return currentThree;
    }
  }
}
// recuperer la position de l'arbre courant

function getPositionThree(data) {
  for (i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.etiquette === threeEtiquette) {
      currentThreePos.push(data.features[i].geometry.coordinates);
      return currentThreePos;
    }
  }
}
