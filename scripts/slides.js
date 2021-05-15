class Slides {
    constructor(slides, main, sub) {
      this.slides = slides;
      this.main = main || 0
      this.sub = sub || 0
    }

    get() {
      return this.slides[this.main][this.sub]
    }

    set(main, sub) {
        this.main = main || 0
        this.sub = sub || 0

        if(this.main==-1){
            this.sub=this.slides[this.main].content.length-1
        }

        if(this.sub==-1){
            this.sub=this.slides[this.main].content.length-1
        }


    }

    prev(){
        if (this.main == 0 && this.sub==0){
            return false
        }
        if(this.sub==0){
            this.main--
        }else{
            this.sub--
        }
        return true
    }

    next(){
        if (this.main == this.slides.length-1 && this.sub==this.slides[this.main].contents.length-1){
            return false
        }
        if(this.sub==this.slides[this.main].contents.length-1){
            this.main++
        }else{
            this.sub++
        }
        return true
    }
  }

function prepareSlides(){
    // prepare verse slides
    var s = []

    if(text.verses.length == 0){
        s = [
            {
                heading: getHeading(),
                content: []
            }
        ]

        for(var i=0; i<text.verses.length;i++){
            s[VERSE].content.push(text.verses[i].roman)
        }
    }

    // prepare synonym slides
    !!text.synonyms && s.push(
        {
            heading: "SYNONYMS",
            content: fit(text.synonyms)
        }
    )

    // prepare translation slides
    !!text.translation && s.push(
        {
            heading: "TRANSLATION",
            content: fit(text.translation)
        }
    )

    // prepare purport slides
    !!text.purport && s.push(
        {
            heading: "PURPORT",
            content: fit(text.purport.map((p)=>{return p.content}).join("\n"))
        }
    )

    slides = new Slides(s)
}