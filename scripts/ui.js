class UI {
    constructor(slideElement, headerElement){
        this.slideElement = slideElement
        this.headerElement = headerElement
    }

    setSlideContent(content){
        this.slideElement.textContent = content.slide
        this.headerElement.textContent = content.heading
    }

    setSlides(slides){
        this.slides = slides
    }

    render(main,sub){
        this.setSlides(new Text(text).toSlides(this))
        this.slides.set(main,sub)
        this.setSlideContent(this.slides.get())
    }

    fit(txt){
        var slidelets = []
        var lwsp=-0
        var offset = 0
    
        txt = txt.trim()
    
        for(var i=0; i<txt.length; i++){
            if(/\s/.test(txt.substring(i,i+1))){
                if(this.isOverflow(txt.substring(offset,i))){
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
    
    isOverflow(txt){
        ui.setSlideContent(txt)
        return ui.slideElement.scrollHeight > ui.slideElement.parentElement.getBoundingClientRect().height
    }
    
    
}