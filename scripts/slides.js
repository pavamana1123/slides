const VERSE = 0
const SYNONYMS = 1
const TRANSLATION = 2
const PURPORT = 3

class Slides {
    constructor(slides, main, sub) {
      this.slides = slides
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
            this.main=this.slides.length-1
        }

        if(this.sub==-1){
            this.sub=this.slides[this.main].content.length-1
        }
    }

    prevSub(){
        if (this.main == 0 && this.sub==0){
            return false
        }
        if(this.sub==0){
            return this.prevMain()
        }else{
            this.sub--
        }
        return true
    }

    nextSub(){
        if (this.main == this.slides.length-1 && this.sub==this.slides[this.main].contents.length-1){
            return false
        }
        if(this.sub==this.slides[this.main].contents.length-1){
            return this.nextMain()
        }else{
            this.sub++
        }
        return true
    }

    nextMain(){
        if (this.main == this.slides.length-1){
            return false
        }

        for(var i=this.main+1; i<=PURPORT; i++){
            if(!this.slides[i].content){
                continue
            }else{
                this.main++
                return true
            }
        }
        return false
    }

    prevMain(){
        if (this.main == 0){
            return false
        }

        for(var i=this.main-1; i>=VERSE; i--){
            if(!this.slides[i].content){
                continue
            }else{
                this.main--
                return true
            }
        }
        return false
    }
  }
