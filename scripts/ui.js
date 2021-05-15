class UI {
    constructor(slideElement, headerElement){
        this.slideElement = slideElement
        this.headingElement = headerElement
    }

    setSlide(content){
        this.slideElement.textContent = content
    }

    setHeader(content){
        this.headingElement.textContent = content
    }
}