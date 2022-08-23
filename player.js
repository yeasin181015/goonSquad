var count = 0;
const playerArray = document.getElementsByClassName("player-btn");
for (var i = 0; i < playerArray.length; i++) {
  document.getElementById(playerArray[i].id).onclick = selectClicked;
}
function getElementidFunction(id) {
  return document.getElementById(id);
}
function selectClicked(event) {
  //const playerID = this.id;
  //const parentID = document.getElementById(playerID).parentElement.id;
  const parentID = getElementidFunction(this.id).parentElement.id;
  const playerName =
    document.getElementById(parentID).firstElementChild.innerHTML;
  addNametolist(playerName);
}
function addNametolist(name) {
  if (count < 5) {
    const node = document.createElement("li");
    const player = document.createTextNode(name);
    node.appendChild(player);
    document.querySelector("ol").appendChild(node);
    count++;
  }
}
const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function (event) {
  const numberOfPlayers =
    document.getElementById("player-list").childElementCount;
  console.log(numberOfPlayers);
  calculatePlayerCost(numberOfPlayers);
});
function calculatePlayerCost(n) {
  const cost = parseFloat(document.getElementById("per-player-cost").innerText);
  var sumOfCost = parseFloat(n) * cost;
  document.getElementById("player-expense").innerText = "$" + sumOfCost;
  calculateTotal(sumOfCost);
}
document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {});

function calculateTotal(totalSum) {
  const finalTotalCost =
    parseFloat(document.getElementById("manager-cost").innerText) +
    parseFloat(document.getElementById("coach-cost").innerText) +
    totalSum;
  document.getElementById("total-cost").innerText = finalTotalCost;
}
