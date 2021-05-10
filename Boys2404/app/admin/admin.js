function Flexso() {
  cardMedewerkersMeetup = document.getElementById("cardMedewerkersMeetup");
  cardMedewerkersOdisee = document.getElementById("cardMedewerkersOdisee");
  cardMedewerkersFlexso = document.getElementById("cardMedewerkersFlexso");
  cardOnkosten = document.getElementById("cardOnkosten");
  cardOnkosten.style = "display: none;";
  cardMedewerkersFlexso.style = "display: inline-block;";
  cardMedewerkersOdisee.style = "display: none;";
  cardMedewerkersMeetup.style = "display: none;";
}
function Odisee() {
  cardMedewerkersMeetup = document.getElementById("cardMedewerkersMeetup");
  cardMedewerkersOdisee = document.getElementById("cardMedewerkersOdisee");
  cardMedewerkersFlexso = document.getElementById("cardMedewerkersFlexso");
  cardOnkosten = document.getElementById("cardOnkosten");
  cardOnkosten.style = "display: none;";
  cardMedewerkersOdisee.style = "display: inline-block;";
  cardMedewerkersFlexso.style = "display: none;";
  cardMedewerkersMeetup.style = "display: none;";
}
function Meetup() {
  cardMedewerkersMeetup = document.getElementById("cardMedewerkersMeetup");
  cardMedewerkersOdisee = document.getElementById("cardMedewerkersOdisee");
  cardMedewerkersFlexso = document.getElementById("cardMedewerkersFlexso");
  cardOnkosten = document.getElementById("cardOnkosten");
  cardOnkosten.style = "display: none;";
  cardMedewerkersMeetup.style = "display: inline-block;";
  cardMedewerkersOdisee.style = "display: none;";
  cardMedewerkersFlexso.style = "display: none;";
}
function ToonOnkosten() {
  cardOnkosten = document.getElementById("cardOnkosten");
  let status = document.getElementById("status");
  status.innerHTML = "Pending";
  status.className = "status-warning";
  cardOnkosten.style = "display: inline-block;";
}
function Keuren(i) {
  let status = document.getElementById("status");
  if (i == 1) {
    status.innerHTML = "Aproved";
    status.className = "status-success";
  } else {
    status.innerHTML = "Rejected";
    status.className = "status-error";
  }
}
