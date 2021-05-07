function handleKey(ev){
    if(ev.key=="ArrowRight" || ev.key=="ArrowLeft"){
        var main = parseInt(slideEl.getAttribute("main"))
        var sub = parseInt(slideEl.getAttribute("sub"))


        if(ev.key=="ArrowRight"){
            if(sub+1 >= slides[main].content.length){
                if(main==3){
                    loadText(text.info.nextId,VERSE,0)
                    return
                }else{
                    main++
                    sub=0
                }
            }else{
                sub++
            }
            setSlide(main,sub)
        }else if(ev.key=="ArrowLeft"){
            if(sub == 0){
                if(main==0){
                    loadText(text.info.prevId,PURPORT,-1)
                    return
                }else{
                    main--
                    sub=0
                }
            }else{
                sub--
            }
            setSlide(main,sub)
        }
    }
}

