const liste = document.querySelector(".liste-arbres");

// ecoute d'evenement btn

// recuperation des donnees
fetch(
  "https://opendata.arcgis.com/datasets/bd092c4a648b4012a28b048affa8ec1c_0.geojson"
)
  .then((response) => response.json())
  .then((data) => {
    createCards(data);
  });

// function creation des cartes

function createCards(data) {
  for (i = 0; i < data.features.length; i++) {
    let containerCards = document.querySelector(".container-cards");
    // creations des elements html pour les cards
    let linkCard = document.createElement("a");
    let card = document.createElement("div");
    let cardCoverBox = document.createElement("div");
    let cardCoverImg = document.createElement("img");
    let cardContentTxt = document.createElement("div");
    let cardNameLogo = document.createElement("div");
    let cardNameBox = document.createElement("div");
    let cardName = document.createElement("div");
    let cardNameSBox = document.createElement("div");
    let cardNameSLogo = document.createElement("div");
    let cardNameS = document.createElement("div");
    let cardQuartierBox = document.createElement("div");
    let cardQuartierLogo = document.createElement("div");
    let cardQuartier = document.createElement("div");
    let cardProprioBox = document.createElement("div");
    let cardProprioLogo = document.createElement("div");
    let cardProprio = document.createElement("div");
    let cardEtiquetteBox = document.createElement("div");
    let cardEtiquetteLogo = document.createElement("div");
    let cardEtiquette = document.createElement("div");
    // ajouts des classe css et atrributs
    card.classList = "card";
    linkCard.href = `./trhee.html?id=${data.features[i].properties.etiquette}`;
    cardCoverBox.classList = "card-cover-box";
    cardCoverImg.setAttribute(
      "src",
      `../sources/img_arbres/${data.features[i].properties.etiquette}.jpg`
    );

    cardCoverImg.setAttribute(
      "alt",
      `un ${data.features[i].properties.nom_commun}`
    );
    cardNameBox.classList = "card-name-box";
    cardNameLogo.classList = "card-name-logo";
    cardName.classList = "card-name";
    cardNameSBox.classList = "card-name-s-box";
    cardNameSLogo.classList = "card-name-s-logo";
    cardNameS.classList = "card-name-s";
    cardQuartierBox.classList = "card-quartier-box";
    cardQuartierLogo.classList = "card-quartier-logo";
    cardQuartier.classList = "card-quartier";
    cardProprioBox.classList = "card-proprio-box";
    cardProprioLogo.classList = "card-proprio-logo";
    cardProprio.classList = "card-proprio";
    cardEtiquetteBox.classList = "card-etiquette-box";
    cardEtiquetteLogo.classList = "card-etiquette-logo";
    cardEtiquette.classList = "card-etiquette";
    cardContentTxt.classList = "card-content-txt";
    // ajout du contenu html
    cardNameLogo.setAttribute("src", "../sources/svg/SVG/SVG/arbre-icon.svg");
    cardName.innerText = `${data.features[i].properties.nom_commun}`;
    cardNameSLogo.setAttribute("src", "../sources/svg/SVG/SVG/check.svg");
    cardNameS.innerText = `${data.features[i].properties.nom_scientifique}`;
    cardQuartierLogo.setAttribute(
      "src",
      "../sources/svg/SVG/SVG/map-locatio.svg"
    );
    cardQuartier.innerText = `${data.features[i].properties.quartier}`;
    cardProprioLogo.setAttribute("src", ".../sources/svg/SVG/SVG/check.svg");
    cardProprio.innerText = `${data.features[i].properties.cad_proprio}`;
    cardEtiquetteLogo.setAttribute("src", "../sources/svg/SVG/SVG/check.svg");
    cardEtiquette.innerText = `${data.features[i].properties.etiquette}`;
    //  creation de la cards dans le DOM
    containerCards.appendChild(linkCard);
    linkCard.appendChild(card);
    card.appendChild(cardCoverBox);
    card.appendChild(cardContentTxt);
    cardContentTxt.appendChild(cardNameBox);
    cardContentTxt.appendChild(cardNameSBox);
    cardContentTxt.appendChild(cardQuartierBox);
    cardContentTxt.appendChild(cardProprioBox);
    cardContentTxt.appendChild(cardEtiquetteBox);
    cardCoverBox.appendChild(cardCoverImg);
    cardNameBox.appendChild(cardNameLogo);
    cardNameBox.appendChild(cardName);
    cardNameSBox.appendChild(cardNameSLogo);
    cardNameSBox.appendChild(cardNameS);
    cardQuartierBox.appendChild(cardQuartierLogo);
    cardQuartierBox.appendChild(cardQuartier);
    cardProprioBox.appendChild(cardProprioLogo);
    cardProprioBox.appendChild(cardProprio);
    cardEtiquetteBox.appendChild(cardEtiquetteLogo);
    cardEtiquetteBox.appendChild(cardEtiquette);
  }
}
