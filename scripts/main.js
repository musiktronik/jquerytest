//jQuery
$(document).ready(function() {
    $("a").click(function(event) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault();
    });
    
    $("a").addClass("test");
    
    $("a").removeClass("test");
    
    $("a").click(function(event) {
        event.preventDefault();
        $(this).hide("slow");
    });
    
    $.get( "index.html", myCallBack );
});

function myCallBack(){
    alert("myCallBack running");
}

//Basic Javascript
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

myHeading.innerHTML = 'Hello world!';

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/red.png') {
      myImage.setAttribute ('src','images/green.png');
    } else {
      myImage.setAttribute ('src','images/red.png');
    }
};

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
};


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
};

function clickButtonHandler(e) {
  setUserName();
};

function main() {
  // Initialization work goes here.
}


// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickButtonHandler);
  main();
});