
var div = document.getElementById("hello");
div.style.backgroundColor="purple";
div.style.height = "100px";
div.style.width = "100px";
div.style.color ="grey";
div.style.fontSize = "20px";
div.style.padding = "50px 50px 50px 10px";
div.style.borderRadius="100px 100px";
div.style.boxShadow="black 10px 10px 5px"
var p = document.createElement("P");


var text = "javascript amd html is a great combination";
p.innerHTML=text;
p.style.color = "white";
p.style.fontStyle ="italic";
div.appendChild(p);
console.log(p);