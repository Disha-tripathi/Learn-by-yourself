function closeModal() {
  // document.querySelector('.modal-content').style.display = 'none';
    // Close the current tab
    window.close();

    // Open a new tab with the desired HTML file
    window.open('/main/index.html', '_blank');
}

// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.querySelector(".button");

// Get the span element that closes the modal
var span = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listener to the button to open the modal
btn.addEventListener("click", openModal);

// Add event listener to the span to close the modal
span.addEventListener("click", closeModal);

// Add event listener to the modal to close it when clicked outside
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});