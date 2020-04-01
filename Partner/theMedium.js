console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
// console.log(theTxt)

theButton.addEventListener('click', isClicked);
// isClicked();
function isClicked() {
 console.log("clicked!");
 theBody.style.backgroundImage = "url(spin.gif)";
}

