var e = document.getElementById("slide")
console.log(e)
e.textContent=text.verses[0].roman
document.addEventListener('keypress',()=>{
    document.getElementById("text").remove()
    var s = document.createElement("script")
    s.setAttribute("id","text")
    s.setAttribute("src","./books/js/bg/1/2.js")
    s.setAttribute("type","text/javascript")
    document.getElementById("textscript").appendChild(s)
    updateVerse()
    updateVerse()
})

function updateVerse(){
    var ee = document.getElementById("slide")
    ee.textContent=text.verses[0].roman
}