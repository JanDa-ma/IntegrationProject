function zegHalloTegenSap() {
  alert("Oh, wat ben ik kut");

  let db = new sqlite3.Database("../../onkostendb.db");
  consolelog("db");
  consolelog(db);
  window.location.href = "admin/OnkostenType?$top=11";
}
