const positionThree = [];
const arbreName = [];

fetch(
  "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
)
  .then((response) => response.json())
  .then((data) => {
    nameTab(data);
    gpsTab(data);
  });

// recuperer la position gps des arbres
function gpsTab(data) {
  for (i = 0; i < data.features.length; i++) {
    positionThree.push(data.features[i].geometry.coordinates);
    console.log(positionThree[i]);
  }
}

// recuperer la position gps des arbres
function nameTab(data) {
  for (i = 0; i < data.features.length; i++) {
    arbreName.push(data.features[i].properties.nom_commun);

    console.log(arbreName[i]);
  }
}

const mymap = L.map("mapid").setView([-22.2758, 166.458], 13);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
}).addTo(mymap);
const marker = L.marker([-22.2743, 166.468]).addTo(mymap);
marker.bindPopup("<b>Je Suis </b><br>un arbre remarquable");
