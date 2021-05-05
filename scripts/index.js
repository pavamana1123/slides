var slides=[]
var slideIndex=-1
var slideEl = document.getElementById("slide")
var slideEnclosureEl = document.getElementById("slideEnclosure")
var headingEl = document.getElementById("heading")

loadText(localStorage.id)

document.addEventListener('keydown',handleKey)


