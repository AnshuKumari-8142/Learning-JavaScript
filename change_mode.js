let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click", ()=> {
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    console.log(currmode);
})
