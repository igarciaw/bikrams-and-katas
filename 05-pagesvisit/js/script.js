let visits = localStorage.getItem("visits") || 0;
let printVisits = document.getElementById("contadorVisitas");
const resetBtn = document.getElementById("btnReestablecer");

visits++;
localStorage.setItem("visits", visits);
renderVisits();

function renderVisits() {
  printVisits.innerText = visits;
}
function reset() {
  visits = 0;
  localStorage.removeItem("visits");
  renderVisits();
}
resetBtn.addEventListener("click", reset);
