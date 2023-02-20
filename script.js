/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

import configData from "./cars.json" assert { type: "json" };

// -------getting--brand----------------
let iterator = configData.values();
for (let elements of iterator) {
  const brandNames = document.createElement("ul");
  brandNames.className = "ul";
  brandNames.innerHTML = elements.brand;

  //--------getting--models--------------
  let atsakymas = elements.models;
  let iteratorModels = atsakymas.values();
  for (let elementsModels of iteratorModels) {
    const modelNames = document.createElement("li");
    modelNames.className = "li";
    modelNames.innerHTML = elementsModels;

    brandNames.append(modelNames);
  }

  let divCarOutput = document.getElementById("output");
  divCarOutput.append(brandNames);
}
