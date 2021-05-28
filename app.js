const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".btn-toggle-container");
const liste = document.querySelector(".liste-arbres");
const btn = document.querySelector(".btn");

// navigation

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

// ecoute d'evenement btn

btn.addEventListener("click", () => {
  // recuperation des donnees
  fetch(
    "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (i = 0; i < data.features.length; i++) {
        let newLi = document.createElement("li");
        let newTitreCarte = document.createElement("h2");
        let newScientifiqueName = document.createElement("h3");
        let newLocationCarte = document.createElement("p");
        let newProprio = document.createElement("p");
        let newLocationDescription = document.createElement("p");
        let newCriteres = document.createElement("p");
        let validation = document.createElement("p");

        newTitreCarte.innerText = `Nom commun : ${data.features[i].properties.nom_commun}`;
        newScientifiqueName.innerText = `Nom scientifiques : ${data.features[i].properties.nom_scientifique}`;
        newLocationCarte.innerText = `Quartier : ${data.features[i].properties.quartier}`;
        newLocationDescription.innerText = `Observations : ${data.features[i].properties.observation}`;
        newProprio.innerText = `Proprietaire : ${data.features[i].properties.cad_proprio}`;
        newCriteres.innerText = `critere biologique: ${data.features[i].properties.critere_biologique} critere culturel:${data.features[i].properties.critere_culturel} critere esthetique: ${data.features[i].properties.critere_esthetique} critere paysager: ${data.features[i].properties.critere_paysager} critere physique: ${data.features[i].properties.critere_physique}`;
        validation.innerText = `Etiquette: ${data.features[i].properties.etiquette}`;

        newLi.appendChild(newTitreCarte);
        newLi.appendChild(newScientifiqueName);
        newLi.appendChild(newLocationCarte);
        newLi.appendChild(newProprio);
        newLi.appendChild(newLocationDescription);
        newLi.appendChild(newCriteres);
        newLi.appendChild(validation);
        liste.appendChild(newLi);
      }
    });
});
