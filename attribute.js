let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";
// div.style.textAlign = "center";

let btn = document.createElement("button");
btn.innerText = "Click";
console.log(btn);

//let div = document.querySelector("div");
//div.append(btn);
div.after(btn);

let newHeading = document.createElement("h1");
newHeading.innerText = "Heading  of the Document";

let body = document.querySelector("body");
body.prepend(newHeading);

let paragraph = document.querySelector("p");
paragraph.remove();