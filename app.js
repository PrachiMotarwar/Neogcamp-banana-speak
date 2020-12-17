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

//outputDiv.innerText = "Prachi"  // this is for inline and to show o/p in box
//console.log (outputDiv);   //taking from function outputDiv

function clickeventHandler ()
{
    outputDiv.innerText = "ddhjklj" + txtInput.value;
 
};

btnTranslate.addEventListener("click", clickeventHandler)

