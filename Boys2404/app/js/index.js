function zegHalloTegenSap() {
  alert("Werkt nog niet");

  let db = new sqlite3.Database("../../onkostendb.db");
  consolelog("db");
  consolelog(db);
  window.location.href = "admin/OnkostenType?$top=11";
}
function Inloggen() {
  username = document.getElementById("username").textContent;
  password = document.getElementById("password").textContent;
  if (username && password == "admin") {
    window.location.href = "admin/admin.html";
  } else if (username && password == "user") {
    window.location.href = "user/user.html";
  }
}
