var currentModal = "Maddox";
var modal = document.getElementById(currentModal);

function loginscript() {
    let charID = prompt("ID?");
    alert(quips[charID])
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displaymodal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function test1() {
    alert(currentModal);
}
