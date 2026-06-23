let btn = document.querySelector("#btn");

btn.addEventListener("click", (evt) =>{ 
    console.log("This is handler1.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})
btn.addEventListener("click", (evt) => {
    console.log("This is handler2.");
    console.log(evt.clientX, evt.clientY);
})

btn.addEventListener("mouseover", (evt) => {
    console.log("This is handler3.");
    console.log(evt.type);
})
// btn.onclick = (evt) => {
//     console.log("The button was clicked!");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("The cursor is on div section.");
    console.log(evt.type);
    console.log(evt.target);
}
div.addEventListener("mouseover", (evt) => {
    console.log("This is created by node.addEventListener Event property.");
    console.log(evt.type);
})