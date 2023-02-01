// Get the form element
var form = document.getElementById("myForm");

// Get the window's width
var windowWidth = window.innerWidth;

// Check if the window's width is less than 500px
if (windowWidth < 500) {
  // If it is, change the form's width to be 90% of the window's width
  form.style.width = (0.9 * windowWidth) + "px";
} else {
  // If not, set the form's width to 500px
  form.style.width = "500px";
}

// Add an event listener to listen for changes to the window's width
window.addEventListener("resize", function() {
  // Get the updated window's width
  windowWidth = window.innerWidth;

  // Check if the window's width is less than 500px
  if (windowWidth < 500) {
    // If it is, change the form's width to be 90% of the window's width
    form.style.width = (0.9 * windowWidth) + "px";
  } else {
    // If not, set the form's width to 500px
    form.style.width = "500px";
  }
});