var len = document.querySelectorAll("button").length;
function sound_to_be_played(alphabet) {
  switch (alphabet) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(buttoninnerHtml);
      break;
  }
}
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;
    sound_to_be_played(buttoninnerHtml);
    buttonAnimation((buttoninnerHtml));
  });
}
document.addEventListener("keydown", function (event) {
  var keypressed = event.key;
  sound_to_be_played(keypressed);
  buttonAnimation(keypressed);
});
function buttonAnimation(alphabet)
{
    var activebutton = document.querySelector("."+alphabet);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}
