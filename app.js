//console.log("Script is working!! from external")

//input
//var username = prompt("Give me username")

//processing
//var msg = ("Hi " + username+ " Welcome to vanilla-js class")
//output

//alert(msg);'''

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

//outputDiv.innerText = "Prachi"  // this is for inline
console.log (outputDiv);   //taking from function outputDiv

function clickEventHandler ()
{
    console.log("clicked");
    console.log("input", txtInput.value)
 
};

btnTranslate.addEventListener("click", clickEventHandler)

