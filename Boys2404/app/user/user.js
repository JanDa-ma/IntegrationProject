let btnVoerOnkostIn = document.getElementById("btnVoerOnkostIn");
let errorNieuweOnkost = document.getElementById("errroNieuweOnkost");
let bedragNieuweOnkost = document.getElementById("onkostInvoerenBedrag");
let datumOnkostInvoeren = document.getElementById("datumOnkostInvoeren");
let onkostenTypeInvoeren = document.getElementById("onkostenTypeInvoeren");
let onkostInvoerenBeschrijving = document.getElementById(
  "onkostInvoerenBeschrijving"
);
//Check datum
datumOnkostInvoeren.addEventListener("change", function () {
  CheckErrors();
});
function CheckDatum() {
  if (datumOnkostInvoeren.value == null || datumOnkostInvoeren.value == "") {
    errorNieuweOnkost.innerHTML = "Datum mag niet leeg zijn";
    errors++;
  } else {
    if (errorNieuweOnkost.innerHTML.includes("Datum")) {
      errorNieuweOnkost.innerHTML = "";
      errors--;
    }
  }
}
//Check bedrag
bedragNieuweOnkost.addEventListener("change", function () {
  CheckErrors();
});
function CheckBedrag() {
  if (bedragNieuweOnkost.value > 10000) {
    errorNieuweOnkost.innerHTML = "Bedrag mag niet groter <br> zijn dan €10000";
    errors++;
    return false;
  } else if (bedragNieuweOnkost.value <= 0) {
    errorNieuweOnkost.innerHTML = "Bedrag moet groter zijn dan €0";
    errors++;
    return false;
  } else {
    if (errorNieuweOnkost.innerHTML.includes("Bedrag")) {
      errorNieuweOnkost.innerHTML = "";
      errors--;
      return true;
    }
  }
}
//Check type
onkostenTypeInvoeren.addEventListener("change", function () {
  CheckErrors();
});
function CheckOnkostenType() {
  let isOk = true;
  onkostenTypeInvoeren.options.forEach((element) => {
    if (
      element.selected == true &&
      (element.value == "geenoptie" || element.value == null)
    ) {
      isOk = false;
    }
  });
  if (!isOk) {
    errorNieuweOnkost.innerHTML = "Onkostentype mag niet leeg zijn";
    errors++;
    return false;
  } else {
    if (errorNieuweOnkost.innerHTML.includes("Onkostentype")) {
      errors--;
      errorNieuweOnkost.innerHTML = "";
      return true;
    }
  }
} //Check Beschrijving
onkostInvoerenBeschrijving.addEventListener("change", function () {
  CheckErrors();
});
function CheckBeschrijving() {
  if (onkostInvoerenBeschrijving.value == "") {
    errorNieuweOnkost.innerHTML = "Beschrijving mag niet leeg zijn";
    errors++;
    return false;
  } else {
    if (errorNieuweOnkost.innerHTML.includes("Beschrijving")) {
      errors--;
      errorNieuweOnkost.innerHTML = "";
      return true;
    }
  }
}
//CheckErrors
function CheckErrors() {
  errors = 0;
  CheckOnkostenType();
  CheckBedrag();
  CheckBeschrijving();
  CheckDatum();

  console.log("aantal errors");
  console.log(errors);
  btnVoerOnkostIn.disabled = errors == 0 || errors == -1 ? false : true;
}
btnVoerOnkostIn.addEventListener("click", function () {
  //New row
  let row = document.createElement("ui5-table-row");
  //Make cells
  let cellDatum = document.createElement("ui5-table-cell");
  let cellBedrag = document.createElement("ui5-table-cell");
  let cellType = document.createElement("ui5-table-cell");
  let cellStatus = document.createElement("ui5-table-cell");

  //Add values
  cellDatum.innerHTML = datumOnkostInvoeren.value;
  cellBedrag.innerHTML = "€ " + bedragNieuweOnkost.value;
  onkostenTypeInvoeren.options.forEach((element) => {
    if (element.selected == true) {
      cellType.innerHTML = element.innerHTML;
    }
  });
  cellStatus.innerHTML =
    "<ui5-label class='color-orange'>Wachten op goedkeuring</ui5-label>";

  //Add cell to row
  row.appendChild(cellDatum);
  row.appendChild(cellBedrag);
  row.appendChild(cellType);
  row.appendChild(cellStatus);
  //Add row to table
  document
    .getElementById("tableOnkosten")
    .insertBefore(
      row,
      document.getElementById("tableOnkosten").childNodes[0].nextSibling
    );
  //Reset fields
  btnVoerOnkostIn.disabled = true;
  errorNieuweOnkost.value = "";
  bedragNieuweOnkost.value = "";
  datumOnkostInvoeren.value = "";
  let index = 0;
  onkostenTypeInvoeren.options.forEach((element) => {
    if (index == 0) {
      element.selected = true;
    } else {
      element.selected = false;
    }
    index++;
  });
  onkostInvoerenBeschrijving.value = "";
});
