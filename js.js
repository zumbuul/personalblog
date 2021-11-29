function formatthirdp() {
  let a = "";
  if (troska.checked) {
    a += " trosarina, ";
  }
  if (durlan.checked) {
    a += " durlan, ";
  }
  if (vrezina.checked) {
    a += " vrezina, ";
  }
  return a + " dzuda voli";
}
