function start() {
  document.getElementById("pstart").style.display = "none";
  document.querySelector(".h1").style.display = "none";
  document.getElementById("buttstart").style.display = "none";
  document.getElementById("click").style.display = "block";
  game1();
}
var buttclick = document.getElementById("click");
var click_count = 0;

function getRandomColor() {
  let color;
  do {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } while (
    color.toLowerCase() === "#5f9ea0" ||
    color.toLowerCase() === "cadetblue"
  );
  return color;
}

function startCountdown(seconds) {
  let timeLeft = seconds;

  const timer = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      if (click_count < 8) {
        clearInterval(timer);
        document.getElementById("click").style.display = "none";
        document.getElementById("lose").style.display = "block";
        click_count = 0;
      } else {
        document.getElementById("click").style.display = "none";
        document.getElementById("lose").style.display = "none";
      }
    }
  }, 1000);
}

function game1() {
  startCountdown(6);
  buttclick.addEventListener("click", function () {
    if (click_count < 8) {
      buttclick.style.backgroundColor = getRandomColor();
      click_count += 1;
      console.log(click_count);
      const maxX = window.innerWidth - buttclick.offsetWidth;
      const maxY = window.innerHeight - buttclick.offsetHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      buttclick.style.left = randomX + "px";
      buttclick.style.top = randomY + "px";
    } else {
      document.getElementById("click").style.display = "none";
      document.getElementById("win").style.display = "block";
      document.getElementById("next").style.display = "block";
    }
  });
}

function restart() {
  window.location.reload();
}
