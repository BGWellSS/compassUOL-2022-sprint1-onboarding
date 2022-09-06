function clearclass (index, max) {
  for (i = 1; i <= max; i++) {
    if (i !== index) {
      el = document.getElementById("panel" + i);
      if (el.classList.contains("scroll-left")) { el.classList.remove("scroll-left"); }
      if (el.classList.contains("scroll-right")) { el.classList.remove("scroll-right"); }
    }
  }
}

function scrollfRight(panel, max) {
  var el = document.getElementById("panel" + panel);
  el.classList.add("scroll-left");
  clearclass (panel, max);
}
function scrollfLeft(panel, max) {
  var el = document.getElementById("panel" + panel);
  el.classList.add("scroll-right");
  clearclass (panel, max);
}