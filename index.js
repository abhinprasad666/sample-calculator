let display=document.getElementById("display")
function btnclick(value){
    display.value +=value
}
function clearscreen(){
    display.value=""
}
function findresult(){
    let result=eval(display.value)
    display.value=result
}