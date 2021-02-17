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
async function story() {
  console.log("scene: ", scene);
  switch (scene) {
    case 9:
      //scene 06, Plawyer calls upon accused
      await wait(1000);
      setTimeout( function(){
      display_dialog(plawyer_stand, "Thank you, your honor", 3000)},00);
      await wait(3000);

      setTimeout(function () {
        display_dialog(
        plawyer_stand,
          "I would like to call upon the accused, Mr. William Moore",
          4000);
      }, 2500);
      await wait(4000);
      //scene++;
      story();
      break;
case 11:
      //scene 10, writer calls accused
      setTimeout( function(){
      display_dialog(writer, "Mr. William Moore, come up in the witness box", 5000)},7500);
      await wait(7500);
      scene++;
      story();
   }
}
