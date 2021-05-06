function fit(txt){
    var slidelets = []
    var lwsp=-1
    var offset = 0

    for(var i=1; i<txt.length; i++){
        if(/\s/.test(txt.substring(i-1,i))){
            if(isOverflow(txt.substring(offset,i-1))){
                slidelets.push(txt.substring(offset,lwsp))
                offset = lwsp+1
                lwsp=-1
            }else{
                lwsp=i-1
            }
        }else if(i==txt.length-1){
            slidelets.push(txt.substring(offset,txt.length))
            break
        }else{
            continue
        }
    }
    return slidelets
}

function isOverflow(txt){
    slideEl.textContent = txt
    return slideEl.scrollHeight > slideEnclosureEl.getBoundingClientRect().height
}

const VERSE = 0
const SYNONYM = 1
const TRANSLATION = 2
const PURPORT = 3

function loadText(id){
    id ||= "sb/1/1/1"
    // remove the script element if it exists
    document.getElementById("text") && document.getElementById("text").remove()
    var s = document.createElement("script")
    s.setAttribute("id","text")
    s.setAttribute("src","./books/js/"+ id + ".js")
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
            content: fit(text.synonyms)
        }
    )

    // prepare translation slides
    slides.push(
        {
            heading: "TRANSLATION",
            content: fit(text.translation)
        }
    )

    // prepare purport slides
    slides.push(
        {
            heading: "PURPORT",
            content: fit(text.purport.map((p)=>{return p.content}).join("\n"))
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

