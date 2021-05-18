function loadText(id,main,sub){
    id = id || "sb/1/1/1"

    // remove the script element if it exists
    document.getElementById("text") && document.getElementById("text").remove()
    
    var s = document.createElement("script")
    s.setAttribute("id","text")
    s.setAttribute("src","./books/"+ id + ".js")
    s.setAttribute("type","text/javascript")
    document.head.appendChild(s)
    s.addEventListener('load',ui.render.bind(ui, main, sub));
    localStorage.id=id
}