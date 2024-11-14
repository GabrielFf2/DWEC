let clockActual;
let windowsOpen;
function initClock() {
  let body = document.querySelector("body");
  body.style.backgroundImage =
    'URL("https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-30.jpg")';
  createInput("hours", 1, 1, 12);
  createInput("minutes", 1, 0, 59);
  createInput("seconds", 1, 0, 59);
  horaActual();
  stopActula();
  openMon();
  closeMon();
}
function createInput(ref, value, min, max) {
  let input = document.createElement("input");
  input.id = ref + "Input";
  input.value = value;
  input.addEventListener("input", function () {
    let v = input.value;
    if (v < min || v > max) {
      input.style.background = "red";
      return;
    } else {
      input.style.background = "white";
    }
    let clock = document.querySelector("#" + ref);
    clock.value = v;
    drawClock();
  });
  document.querySelector("body").appendChild(input);
}

function horaActual() {
  let input = document.createElement("button");
  input.id = "Play";
  input.textContent = "Play";
  input.addEventListener("click", function () {
    if (clockActual !== null && clockActual !== undefined)
      clearInterval(clockActual);
    clockActual = setInterval(() => {
      let dataActual = new Date();
      document.querySelector("#hours").value = dataActual.getHours();
      document.querySelector("#minutes").value = dataActual.getMinutes();
      document.querySelector("#seconds").value = dataActual.getSeconds();

      document.querySelector("#hoursInput").value = dataActual.getHours();
      document.querySelector("#minutesInput").value = dataActual.getMinutes();
      document.querySelector("#secondsInput").value = dataActual.getSeconds();

      drawClock();
    }, 1000);
  });
  document.querySelector("body").appendChild(input);
}
function stopActula() {
  let input = document.createElement("button");
  input.id = "Stop";
  input.textContent = "Stop";
  input.addEventListener("click", function () {
    if (clockActual !== null && clockActual !== undefined)
      clearInterval(clockActual);
  });
  document.querySelector("body").appendChild(input);
}
function openMon() {
  let input = document.createElement("button");
  input.id = "MON";
  input.textContent = "MON";
  input.addEventListener("click", function () {
    let url = "https://junior-report.cat/les-hores-del-mon/";
    openMon = window.open(url, "_BLANK", "width=600,height=400");
  });
  document.querySelector("body").appendChild(input);
}

function closeMon() {
  let input = document.createElement("button");
  input.id = "CLOSE";
  input.textContent = "CLOSE";
  input.addEventListener("click", function () {
    if (openMon !== null && openMon !== undefined) {
      openMon.close();
      //   window.close();º
    }
  });
  document.querySelector("body").appendChild(input);
}
