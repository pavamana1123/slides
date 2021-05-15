function fit(txt){
    var slidelets = []
    var lwsp=-0
    var offset = 0

    txt = txt.trim()

    for(var i=0; i<txt.length; i++){
        if(/\s/.test(txt.substring(i,i+1))){
            if(isOverflow(txt.substring(offset,i))){
                slidelets.push(txt.substring(offset,lwsp))
                // skipping ws
                offset = lwsp+1
            }else{
                lwsp=i
            }
        }
        if(i==txt.length-1){
            slidelets.push(txt.substring(offset,txt.length))
            break
        }
    }
    return slidelets
}

function isOverflow(txt){
    slideEl.textContent = txt
    return slideEl.scrollHeight > slideEnclosureEl.getBoundingClientRect().height
}

function render(main,sub){
    prepareSlides()
    setSlide(main,sub)
}

function setSlide(main,sub){


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

