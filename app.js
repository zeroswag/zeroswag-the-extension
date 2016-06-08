var word = document.getElementsByClassName("word");
var description = document.getElementsByClassName("description");
var dash = document.getElementsByClassName("dash");

word[0].innerHTML = "insert word";
description[0].innerHTML = "insert description";

dash[0].addEventListener('click', function () {
  document.body.innerHTML="<img src='dash.png'>"; 
});
