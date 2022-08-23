const playerArray = document.getElementsByClassName("player-btn");
for (var i = 0; i < playerArray.length; i++) {
  document.getElementById(playerArray[i].id).onclick = selectClicked;
}
function addNametolist(name) {
  const node = document.createElement("li");
  const player = document.createTextNode(name);
  node.appendChild(name);
}

function selectClicked(event) {
  let playerID = this.id;
  let parentID = document.getElementById(playerID).parentElement.id;
  let playerName =
    document.getElementById(parentID).firstElementChild.innerHTML;
  addNametoList(playerName);
}
