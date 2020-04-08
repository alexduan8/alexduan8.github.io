const theButton = document.querySelector("#firstButton");

let theBody = document.querySelector('body');
theButton.addEventListener('click', isClicked);

function isClicked() {
 console.log("clicked!");
 theBody.style.backgroundImage = "url(flash.jpg)";
}
