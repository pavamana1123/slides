class Text {
    constructor(text) {
        this.text = text
    }

    toSlides(){
        // prepare verse slides
        var s = [
            {
                heading: this.getVerseHeading(),
                content: !!this.text.verses ? this.text.verses.map((verse)=>{
                    return verse.roman
                }) : null
            }
        ]
        

        // prepare synonym slides
        s.push(
            {
                heading: "SYNONYMS",
                content: !!this.text.synonyms ? fit(this.text.synonyms) : null
            }
        )

        // prepare translation slides
        s.push(
            {
                heading: "TRANSLATION",
                content: !!this.text.translation ? fit(this.text.translation) : null
            }
        )

        // prepare purport slides
        s.push(
            {
                heading: "PURPORT",
                content: !!this.text.purport ? fit(this.text.purport.map((p)=>{return p.content}).join("\n")) : null
            }
        )

        return new Slides(s)
    }

    getVerseHeading(){
        var id = this.text.info.id
        id = id.replace("sb/","Śrīmad-Bhāgavatam ")
        id = id.replace("bg/","Bhagavad-gītā ")
        id = id.replace("cc/","Sri Caitanya-caritamrta ")
        id = id.replaceAll("/", ".")
        return id
    }
    
}