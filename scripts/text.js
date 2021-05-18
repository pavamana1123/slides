class Text {
    constructor(text) {
        this.text = text
    }

    toSlides(ui){
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
                content: !!this.text.synonyms ? ui.fit(this.text.synonyms) : null
            }
        )

        // prepare translation slides
        s.push(
            {
                heading: "TRANSLATION",
                content: !!this.text.translation ? ui.fit(this.text.translation) : null
            }
        )

        // prepare purport slides
        s.push(
            {
                heading: "PURPORT",
                content: !!this.text.purport ? ui.fit(this.text.purport.map((p)=>{return p.content}).join("\n")) : null
            }
        )

        return new Slides(s)
    }

    getVerseHeading(){
        var id = this.text.info.id
        id = id.replace("sb/","Çrémad-Bhägavatam ")
        id = id.replace("bg/","Bhagavad-Gétä ")
        id = id.replace("cc/","Çré Caitanya-caritämåta ")
        id = id.replaceAll("/", ".")
        return id
    }
    
}