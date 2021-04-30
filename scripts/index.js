var slide = document.getElementById("slide")
slide.textContent=text.verses[0].roman

var heading = document.getElementById("heading")
heading.textContent=getHeading()

function getHeading(){
    var id = text.info.id
    id = id.replace("bg\\","Bhagavad-Gītā ")
    id = id.replace("\\", ".")
    return id
}

function handleKey(ev){
    if(ev.key=="ArrowRight" || ev.key=="ArrowLeft"){
        replaceScript(ev)
        updateVerse()
    }
}

document.addEventListener('keydown',handleKey)

function replaceScript(ev){
    document.getElementById("text").remove()
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
}

fit(text.verses[0].roman, document.getElementById("slide"),document.getElementById("slideEnclosure"))