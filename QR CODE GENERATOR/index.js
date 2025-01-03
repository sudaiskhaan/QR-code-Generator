let button = document.getElementById("btn");
let inputText = document.getElementById("textinput");
let imgbox = document.getElementById("img-box");
let image = document.getElementById("image");

button.onclick = function() {
    if (inputText.value.trim() !== "") {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputText.value);
        
    }
};
