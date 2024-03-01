const keys = document.querySelectorAll(".key"); // pega todos os elementos que possuem a classe "key"
//const dataKeys = document.querySelectorAll("[data-key]");

function playNote(event){
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`);
    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey) {
        return;
    }
}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown";

    is
}


keys.forEach(function(key){
    key.addEventListener("click", playNote);
})

window.addEventListener("keydown", playNote);