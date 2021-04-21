var e = document.getElementById("slide")
e.textContent=text.verses[0].roman

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
    var ee = document.getElementById("slide")
    ee.textContent=text.verses[0].roman
}