var getBtn = document.getElementById('wishBtn')
var wishSection = document.getElementById('wish')
var crossBtn =document.getElementById('cross')

getBtn.onclick = function(){
   
    wishSection.style.left = "0"

    

}

crossBtn.onclick = function(){
    wishSection.style.left = "-100%"
    
}