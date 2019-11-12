var gameMarker = "O";

function changeMarkerToX() {
  gameMarker = "X";
  console.log("The X button was clicked!");
}

function changeMarkerToO() {
  gameMarker = "O";
  console.log("The O button was clicked!");
}

function placeMark(id) {
  id.innerHTML = gameMarker;
}
