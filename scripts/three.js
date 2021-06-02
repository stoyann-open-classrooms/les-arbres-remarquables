const parseUrl = new URL(window.location.href);

fetch(
  "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
)
  .then((response) => response.json())
  .then((data) => {
    getCurrentThree(data);
  });

function getCurrentThree(data) {
  const threeEtiquette = parseUrl.searchParams.get("id");

  for (i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.etiquette === threeEtiquette) {
      console.log(data.features[i].properties);
    }
  }
}
