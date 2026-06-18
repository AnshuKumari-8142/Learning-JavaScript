let btn = document.createElement("buttuon");
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.innerText = "Button";
btn.style.padding = "10px";

let body = document.querySelector("body");
body.prepend(btn);