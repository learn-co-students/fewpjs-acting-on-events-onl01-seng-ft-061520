// Your code here
console.log(dodger.style.left); 
console.log(dodger.style.bottom);
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";

document.addEventListener("keydown",
function (e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
  }
});

function moveDodgerLeft() {
  let leftNumbers = 
  dodger.style.left.replace("px","");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left =  `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}