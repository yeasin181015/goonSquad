var count = 0;
var TOTAL_SUM = 0;

function getElementidFunction(id) {
  return document.getElementById(id);
}

const playerArray = document.getElementsByClassName("player-btn");
for (var i = 0; i < playerArray.length; i++) {
  getElementidFunction(playerArray[i].id).onclick = selectClicked;
}

function selectClicked(event) {
  const parentID = getElementidFunction(this.id).parentElement.id;
  const playerName = getElementidFunction(parentID).firstElementChild.innerHTML;
  addNametolist(playerName, event.target.id);
}

function addNametolist(name, disableID) {
  if (count < 5) {
    const node = document.createElement("li");
    name = (count + 1).toString() + ". " + name;
    const player = document.createTextNode(name);
    node.appendChild(player);
    document.querySelector("ol").appendChild(node);
    count++;
    disableButton(disableID);
  } else {
    alert("OverLimit!");
  }
}
function disableButton(ButtonIDdisable) {
  getElementidFunction(ButtonIDdisable).disabled = true;
  getElementidFunction(ButtonIDdisable).style.backgroundColor = "#F5F5F5";
  getElementidFunction(ButtonIDdisable).style.color = "#000000";
}

const calculateButton = getElementidFunction("calculate-button");
calculateButton.addEventListener("click", function (event) {
  const numberOfPlayers = getElementidFunction("player-list").childElementCount;
  console.log(numberOfPlayers);
  calculatePlayerCost(numberOfPlayers);
});

function calculatePlayerCost(n) {
  const cost = parseFloat(document.getElementById("per-player-cost").value);
  var sumOfCost = parseFloat(n) * cost;
  getElementidFunction("player-expense").innerText = "$" + sumOfCost;
  TOTAL_SUM = sumOfCost;
}

getElementidFunction("calculateTotal").addEventListener("click", function () {
  const finalTotalCost =
    parseFloat(getElementidFunction("manager-cost").value) +
    parseFloat(getElementidFunction("coach-cost").value) +
    TOTAL_SUM;
  getElementidFunction("total-cost").innerText = "$" + finalTotalCost;
});
