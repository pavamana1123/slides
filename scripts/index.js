var ui = new UI(document.getElementById("slide"),document.getElementById("heading"))

// loadtext
loadText(localStorage.id)

// handle key events
document.addEventListener('keydown',handleKey)


