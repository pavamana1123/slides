const VERSE = 0
const SYNONYM = 1
const TRANSLATION = 2
const PURPORT = 3

function loadText(id){
    // remove the script element if it exists
    document.getElementById("text") && document.getElementById("text").remove()

    var s = document.createElement("script")
    s.setAttribute("id","text")
    s.setAttribute("src","./books/js/"+ (id || "sb/1/1/1") + ".js")
    s.setAttribute("type","text/javascript")
    document.head.appendChild(s)
    s.addEventListener('load',renderVerse);
    localStorage.id=id
}

function renderVerse(){
    // prepare verse slides
    slides= [
        {
            heading: getHeading(),
            content: []
        }
    ]
    for(var i=0; i<text.verses.length;i++){
        slides[VERSE].content.push(text.verses[i].roman)
    }

    // prepare synonym slides
    slides.push(
        {
            heading: "SYNONYMS",
            content: fit(text.synonyms,slideEl,slideEnclosureEl)
        }
    )

    // prepare translation slides
    slides.push(
        {
            heading: "TRANSLATION",
            content: fit(text.translation,slideEl,slideEnclosureEl)
        }
    )

    // prepare purport slides
    slides.push(
        {
            heading: "PURPORT",
            content: fit(text.purport.map((p)=>{return p.content}).join("\n"),slideEl,slideEnclosureEl)
        }
    )

    setSlides(VERSE,0)
}

function setSlides(main,sub){
    slideEl.textContent = slides[main].content[sub]
    headingEl.textContent = slides[main].heading
    slideEl.setAttribute("main",main)
    slideEl.setAttribute("sub",sub)
}

function getHeading(){
    var id = text.info.id
    id = id.replace("sb/","Śrīmad-Bhāgavatam ")
    id = id.replace("bg/","Bhagavad-gītā ")
    id = id.replace("cc/","Sri Caitanya-caritamrta ")
    id = id.replaceAll("/", ".")
    return id
}

function handleKey(ev){
    if(ev.key=="ArrowRight" || ev.key=="ArrowLeft"){
        var main = parseInt(slideEl.getAttribute("main"))
        var sub = parseInt(slideEl.getAttribute("sub"))

        console.log(main,sub)

        if(ev.key=="ArrowRight"){
            if(sub+1 >= slides[main].content.length){
                if(main==3){
                    loadText(text.info.nextId)
                }else{
                    main++
                    sub=0
                }
            }else{
                sub++
            }
            console.log(main,sub,sub+1 >= slides[main].content.length)
            setSlides(main,sub)
        }else if(ev.key=="ArrowLeft"){
            if(sub == 0){
                if(main==0){
                    loadText(text.info.prevId)
                }else{
                    main--
                    sub=0
                }
            }else{
                sub--
            }
            setSlides(main,sub)
        }
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
    document.head.appendChild(s)
    s.addEventListener('load',updateVerse);
}

function updateVerse(){
    slide.textContent=text.verses[0].roman
    heading.textContent=getHeading()
    var t = document.getElementById("text")
    localStorage.id=t.getAttribute("src")
}