function displayvalue(val){
document.getElementById("dispaly").value = document.getElementById("dispaly").value+val;
}

function cleardisplay() {
    document.getElementById("dispaly").value="";
}

function calculate(){
    var userInput= document.getElementById("dispaly").value;
    var result = eval(userInput);
    document.getElementById("dispaly").value  = result;

}