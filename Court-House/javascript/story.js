var scene;
var accused = document.getElementById("accused");
var writer = document.getElementById("writer");
var judge1 = document.getElementById("judge1");
var judge2 = document.getElementById("judge2");
var judge3 = document.getElementById("judge3");
var plawyer = document.getElementById("Plawyer");
var plawyer1 = document.getElementById("Plawyer1");
var dlawyer = document.getElementById("Dlawyer");
var dlawyer1 = document.getElementById("Dlawyer1");
var plawyer_stand = document.getElementById("player_stand");
var dlawyer_stand = document.getElementById("dlawyer_stand");

function startstory(no) {
  scene = no;
  story();
}
function story() {
  console.log("scene: ", scene);

  // Queue template
  // function scene08() {
  //   {
  //     //code BLOCK
  //   }
  //   setTimeout(
  //     //next scene link
  //   , 4000);
  // }

  function scene12() {
    console.log("ended", scene);
  }
  function scene11() {
    display_dialog(
      writer,
      "Mr. William Moore, come up in the witness box",
      5000
    );
    console.log(scene++);
    setTimeout(scene12, 10000);
  }
  function scene10() {
    display_dialog(
      plawyer_stand,
      "I would like to call upon the accused, Mr. William Moore",
      4000
    );
    console.log(scene++);
    setTimeout(scene11, 8000);
  }

  function scene09() {
    display_dialog(plawyer_stand, "Thank you, your honor", 2500);
    console.log(scene++);
    setTimeout(scene10, 6000);
  }

  setTimeout(scene09, 1000);
}
