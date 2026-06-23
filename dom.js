let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + "From Apna College Student";
console.dir(h2.innerText);

let myClass = document.querySelectorAll(".box");
let idx = 1;
for(let div of myClass){
    div.innerText = (`Adding Content to ${idx}`);
}