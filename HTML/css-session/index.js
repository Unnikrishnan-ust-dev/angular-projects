var mask = document.querySelector(".main-mask");

var cards = document.getElementsByClassName("card")
document.querySelectorAll(".card").forEach((item)=>{
    item.addEventListener("mouseover",(e)=>{
        e.target.style.zIndex = "20";
        mask.style.display="block";
        console.log("over");
    })
})

document.querySelectorAll(".card").forEach((item)=>{
    item.addEventListener("mouseout",(e)=>{
        e.target.style.zIndex = "1";
        mask.style.display="none";
        console.log("out");
    })
})