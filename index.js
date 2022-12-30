let totalDrums = document.querySelectorAll(".drum").length
let drumAudio = new Audio('sound/tom-1.mp3')

//### Detecting button press
for (let i = 0; i < totalDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //save data
        let buttonInnerHtml = this.innerHTML;

        //send parameter to function makeSound/ buttonInnerHtml -> key
        makeSound(buttonInnerHtml);
        //send parameter to function "buttonanimation"/ buttonInerHtml ->
        buttonAnimation(buttonInnerHtml);
    })
}

//### Detecting keyboard press
//recibe el valor de la  tecla presionada "keypress" - con la funcion de "event"
document.addEventListener("keypress", function (event) {
    //*! (event) imprime todo los valores del evento - (event.key) imprime solo la tecla del evento ej: a,w,s,d...
    
    //send event.key (a,w,s,d...) to function makesound/ event.key -> key
    makeSound(event.key);

    //pass parameter=event.key (tecla presionada) to "buttonAnimation" -> "currentKey"
    buttonAnimation(event.key);

})

//makeSound take parameters(addEvenListener... & Detecting button press 'for' and play sound with switch case)
function makeSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio('sound/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sound/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sound/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('sound/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('sound/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sound/crash.mp3');
            crash.play();
            break;
        case "l":
            let kickBass = new Audio('sound/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            break;
    }
}
//buttonAnimation take paremeters (buttonInnerHtml & event.key)
function buttonAnimation(currentKey) {
    //find the key
    //el parametro que entra es un solo caracter, por lo que se le agrega "." para que este sea: ".w"
    let activeButton = document.querySelector("." + currentKey);

    //activeButton.getAttribute("class",".pressed")
    activeButton.classList.add("pressed");
    //remove class pressed - timeout()
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

    console.log(activeButton);

}