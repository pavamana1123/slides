function fit(txt, txtEl, encEl){
    var words = txt.split(" ")
    for(var i=0; i<words.length; i++){
        txtEl.textContent = words.slice(0,i).join(" ")

        // var ratio = txtEl.getBoundingClientRect().height/encEl.getBoundingClientRect().height
        // console.log(ratio,encEl.getBoundingClientRect().height,screen.availHeight)
        if(txtEl.getBoundingClientRect().height > encEl.getBoundingClientRect().height){
            txtEl.textContent = words.slice(0,i-1).join(" ")
            break
        }
    }
}