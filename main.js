const keys = document.querySelectorAll(".key"); // pega todos os elementos que possuem a classe "key"
//const dataKeys = document.querySelectorAll("[data-key]");

function playNote(event){
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`);
    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key);
    playAudio(audioKeyCode);
}

function addPlayingClass(key){
    key.classList.add("playing");
}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown";
    if(isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function removePlayingclass(event){
    event.target.classList.remove("playing");
}


keys.forEach(function(key){
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingclass)
})

window.addEventListener("keydown", playNote);