function zegHalloTegenSap() {
  alert("Werkt nog niet");

  let db = new sqlite3.Database("../../onkostendb.db");
  consolelog("db");
  consolelog(db);
  window.location.href = "admin/OnkostenType?$top=11";
}
function Inloggen() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  dialog = document.getElementById("dialog");
  console.log(username);
  console.log(password);
  if (username == "admin" && password == "admin") {
    window.location.href = "admin/admin.html";
  } else if (username == "user" && password == "user") {
    window.location.href = "user/user.html";
  } else {
    dialog.open();
  }
}
