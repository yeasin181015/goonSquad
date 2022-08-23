const playerArray = document.getElementsByClassName("player-btn");
for (var i = 0; i < playerArray.length; i++) {
  document.getElementById(playerArray[i].id).onclick = selectClicked;
}
function selectClicked(event) {
  console.log(this.id);
}
