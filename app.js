//console.log("Script is working!! from external")

//input
//var username = prompt("Give me username")

//processing
//var msg = ("Hi " + username+ " Welcome to vanilla-js class")
//output

//alert(msg);'''

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
function clickEventHandler ()
{
    console.log("clicked");
    console.log("input", txtInput.value)

};

btnTranslate.addEventListener("click", clickEventHandler)

