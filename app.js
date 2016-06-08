var word = document.getElementsByClassName("word");
var description = document.getElementsByClassName("description");
var dash = document.getElementsByClassName("dash");


dash[0].addEventListener('click', function () {
  document.body.innerHTML="<img src='dash.png'>";
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://zeroswag.mobil.ninja", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var resp = JSON.parse(xhr.responseText);
    word[0].innerHTML = resp['title'];
    description[0].innerHTML = resp['description'];
  }
}
xhr.send();
