var global_volume = 1;
var keypress_to_sound_button = {};

var sound_buttons = document.querySelectorAll(".sound-button");
for(let sound_button of sound_buttons)
{
    keypress_to_sound_button[sound_button.getAttribute("data-sound-keypress")] = sound_button;
}

document.addEventListener("keypress", function(event) {
    if(event.code in keypress_to_sound_button) {
        keypress_to_sound_button[event.code].onclick();
    }
});

function setVolume(volume)
{
    global_volume = volume;
}

function playAudio(url, volume)
{
    var sound = new Audio(url);
    sound.volume = volume * global_volume;
    sound.play();
}