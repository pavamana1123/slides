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

