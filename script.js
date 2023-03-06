const mediaQuery = window.matchMedia("(max-width:600px)");

function handleViewportChange(event) {
  if (event.matches) {
    alert("Open in Desktop view for better viewing experience");
  }
}

mediaQuery.addEventListener("change", handleViewportChange);
