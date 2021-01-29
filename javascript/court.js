var accused = document.getElementById("accused");
var writer = document.getElementById("writer");
var judge1 = document.getElementById("judge1");
var judge2 = document.getElementById("judge2");
var judge3 = document.getElementById("judge3");
var dialog = document.getElementById("dialog");
var bg = document.getElementById("bgCourt");
var scene = 0;

increaseOpacity(bg, 0.005);
start();

async function start() {
  //scene 01
  setTimeout(function () {
    dialog.style.left = writer.style.left + 220;
    dialog.style.top = writer.style.top + 80;
    increaseOpacity(dialog, 0.01);
    scene++;
  }, 3000);
  await wait(3000);

  // scene 02
  // rise lawyers
  // add pop up to make defence lawyer stand
  // wait for defense lawyer to stand
  setTimeout(function () {
    decreaseOpacity(dialog, 0.03);
    scene++;
  }, 3000);
  await wait(2000);

  // scene 03
  // jury enters
  setTimeout(function () {
    increaseOpacity(judge2, 0.007);
    increaseOpacity(judge3, 0.007);
    increaseOpacity(judge1, 0.003);
    scene++;
  }, 2000);
  await wait(3000);
}

// functions used multiple times

function increaseOpacity(ele, del) {
  var val = 0;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val + del;
    if (val >= 1) {
      clearInterval(op);
    }
  }, 10);
}
function decreaseOpacity(ele, del) {
  var val = 1;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val - del;
    if (val <= 0) {
      clearInterval(op);
    }
  }, 10);
}
function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
