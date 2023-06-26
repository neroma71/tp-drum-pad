
let pads = document.querySelectorAll('.pad div');
let sounds = document.querySelectorAll('.sounds');

pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
       sounds[index].currentTime = 0;
       sounds[index].play(); 
    });
    });
 window.addEventListener('keydown', (e)=>{
    soundplay(e);
    
    let soundTab=[];
    soundTab.push(e.key);
    console.log(soundTab);
});
function soundplay(e){
    let datakey;
switch(e.key){
    case "a":
        datakey="65";
       break;
    case "z":
        datakey="90";
       break;
    case "e":
        datakey="69";
          break;
   case "r":
         datakey="82";
          break;
   case "t":
        datakey="84";
           break;
   case "y":
        datakey="85";
           break;
   case "u":
        datakey="73";
           break;
   case "i":
        datakey="79"; 
           break;
   case "o":
        datakey="80"; 
           break;
       }
       let sound = document.querySelector(`audio[data-key="${datakey}"]`);
       sound.currentTime = 0;
       sound.play();
       let div = document.querySelector(`div[data-key="${datakey}"]`);

       function remove(){
        div.classList.remove('playing');
       }
        div.classList.add('playing');
        setTimeout(remove, 100);
    }

