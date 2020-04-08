const theButton = document.querySelector("#firstButton");
// console.log(theTxt)

theButton.addEventListener('click', isClicked);
// isClicked();
function isClicked() {
 console.log("clicked!");
 theBody.style.backgroundImage = "url(flash.jpg)";
}
