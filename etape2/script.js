function lose() {
  document.getElementById("lose").style.display = "block";
  document.getElementById("button").style.opacity = "50%";
  document.getElementById("button").style.pointerEvents = "none";
}

function restart() {
  location.reload();
}
function next() {
  document.getElementById("next").style.display = "block";
}
