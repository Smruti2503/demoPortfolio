var getArea = document.getElementById('todayDate')

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

if((today.getMonth()+1) == 1){
    var date = "January "+today.getDate()+' '+ today.getFullYear();  
}

getArea.innerHTML= date
