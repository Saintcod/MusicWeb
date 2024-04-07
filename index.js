

var a=document.querySelectorAll(".drum").length;

for(let i=0;i<a;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var count=this.innerHTML;
      makesound(count);
      buttonAnimation(count);

  });

};
document.addEventListener("keypress",function (event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){

  switch(key){
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

       default:
       console.log("Please click in specified drums");
  }
}
function buttonAnimation(curremtkey){
  var activeButton=document.querySelector("." + curremtkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
