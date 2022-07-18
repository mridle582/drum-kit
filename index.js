// For button/mouse actions
var drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML); 
        buttonAnimation(this.innerHTML);
    });
}

// For keyboard actions
document.addEventListener("keydown", function(event)  {
    playSound(event.key);
    buttonAnimation(event.key);
});


// Used to bind user interaction to the mp3's.
function playSound(char) {
    switch (char) {
        case 'w': 
            new Audio("sounds/tom-1.mp3").play();
        break;
        
        case 'a': 
            new Audio("sounds/tom-2.mp3").play();
        break;

        case 's': 
            new Audio("sounds/tom-3.mp3").play();
        break;

        case 'd': 
            new Audio("sounds/tom-4.mp3").play();
        break;
            
        case 'j': 
            new Audio("sounds/snare.mp3").play();
        break;

        case 'k': 
            new Audio("sounds/crash.mp3").play();
        break;

        case 'l': 
            new Audio("sounds/kick-bass.mp3").play();
        break;

        default:
            alert("Wrong Key was pressed: " + char);
    }
}

// Used to grey out the press 'button' to indicate it being pressed
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() { 
        activeButton.classList.remove("pressed") 
    }, 100);
}
