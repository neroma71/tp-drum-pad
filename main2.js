let keys = document.querySelectorAll(".key");
let audio;
let key;

window.addEventListener("keydown", playSound);

keys.forEach(function(key){
    key.addEventListener("transitionend", removeTransition);
});

function playSound(event){
    audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event){
    event.target.classList.remove("playing");
}