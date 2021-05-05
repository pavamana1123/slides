function fit(txt, txtEl, encEl){
    var slidelets = []
    var lastWhiteSpacePos=-1

    var offset = 0
    for(var i=1; i<txt.length; i++){
        txtEl.textContent = txt.substring(offset,i)
        if(/\s/.test(txt.substring(i-1,i))){
            lastWhiteSpacePos=i
        }
        if(txtEl.scrollHeight > encEl.getBoundingClientRect().height){
            if(lastWhiteSpacePos==-1){
                txtEl.textContent = txt.substring(0,i).trim()
                offset = i
            }else{
                txtEl.textContent = txt.substring(offset,lastWhiteSpacePos).trim()
                offset = lastWhiteSpacePos
            }
            slidelets.push(txtEl.textContent)
        }
    }
    return slidelets
}