document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
});
