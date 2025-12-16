function check() {
  const code = document.getElementById("codeInput").value;
  if (code === "7x87bt") {
    document.getElementById("win").style.display = "block";
  } else {
    document.getElementById("lose").style.display = "block";
    document.getElementById("content").style.opacity = "50%";
    document.getElementById("content").style.pointerEvents = "none";
  }
}

function restart() {
  location.reload();
}
