const parseUrl = new URL(window.location.href);

const threeEtiquette = parseUrl.searchParams.get("id");

fetch(
  "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
)
  .then((response) => response.json())
  .then((data) => {
    showCurrentThree(data);
    getPositionThree(data);
  });

// recuperer le tableau de donnee de l'arbre courrant

function showCurrentThree(data) {
  for (i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.etiquette === threeEtiquette) {
      const communName = data.features[i].properties.nom_commun;
      const scientName = data.features[i].properties.nom_scientifique;
      const observation = data.features[i].properties.observation;

      let main = document.querySelector("main");
      let titlePage = document.createElement("h1");
      let subtitle = document.createElement("h2");
      let observationTxt = document.createElement("p");

      titlePage.innerText = communName;
      subtitle.innerText = scientName;
      observationTxt.innerText = observation;

      main.appendChild(titlePage);
      main.appendChild(subtitle);
      main.appendChild(observationTxt);
    }
  }
}
// recuperer la position de l'arbre courant

function getPositionThree(data) {
  for (i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.etiquette === threeEtiquette) {
      const currentThreePos = data.features[i].geometry.coordinates;
      return currentThreePos;
    }
  }
}
