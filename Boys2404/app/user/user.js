let bedragNieuweOnkost = document.getElementById("onkostInvoerenBedrag");
let errorNieuweOnkost = document.getElementById("errroNieuweOnkost");
let btnVoerOnkostIn = document.getElementById("btnVoerOnkostIn");
bedragNieuweOnkost.addEventListener("change", function () {
  if (bedragNieuweOnkost.value > 10000) {
    errorNieuweOnkost.innerHTML = "Bedrag mag niet groter <br> zijn dan €10000";
  } else {
    if (errorNieuweOnkost.innerHTML.includes("Bedrag")) {
      errorNieuweOnkost.innerHTML = "";
    }
  }
});
