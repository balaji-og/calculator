const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}

function onclickdisplay(){
    display.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}