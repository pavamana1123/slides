

function getHeading(){
    var id = text.info.id
    id = id.replace("sb/","Śrīmad-Bhāgavatam ")
    id = id.replaceAll("/", ".")
    return id
}

function handleKey(ev){
    if(ev.key=="ArrowRight" || ev.key=="ArrowLeft"){
        replaceScript(ev)
        updateVerse()
    }
}

function replaceScript(ev){
    document.getElementById("text") && document.getElementById("text").remove()
    var s = document.createElement("script")
    s.setAttribute("id","text")
    var path
    if(ev.key=="ArrowRight"){
        path = text.info.nextId
    }
    if(ev.key=="ArrowLeft"){
        path = text.info.prevId
    }
    s.setAttribute("src","./books/js/"+ path + ".js")
    s.setAttribute("type","text/javascript")
    document.getElementById("textscript").appendChild(s)
    s.addEventListener('load',updateVerse);
}

function updateVerse(){
    slide.textContent=text.verses[0].roman
    heading.textContent=getHeading()
    var t = document.getElementById("text")
    localStorage.id=t.getAttribute("src")
}

document.addEventListener('keydown',handleKey)



var t = document.getElementById("text")
t.setAttribute("src", localStorage.id || "./books/js/sb/1/1/1.js")
t.addEventListener("load",()=>{
    localStorage.id=t.getAttribute("src")
    var slide = document.getElementById("slide")
    slide.textContent=text.verses[0].roman

    var heading = document.getElementById("heading")
    heading.textContent=getHeading()
    
    fit(text.verses[0].roman, document.getElementById("slide"),document.getElementById("slideEnclosure"))
})


