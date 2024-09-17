const handleClick = (event)=>{
    alert("Greetings");
}

const showSeason = (event)=>{
    const month = new Date().getMonth()
    if(2<=month && month<=6){
        alert("Monsoon");
    }else{
        alert("Summer");
    }
}

const div = document.querySelector("div");

const enableGreen = ()=>{
    div.style.backgroundColor = "green";
}

const enableBlue = ()=>{
    div.style.backgroundColor = "blue";
}

const resetBtn = ()=>{
    div.style.backgroundColor = "white";
}

var actionNum = 0;
var colorList = ["red","blue","black","orange","yellow","purple"];
var currentColor = 0;
let currentWidth = 100;
let currentHeight = 25;
const btn = document.querySelector("#random");
btn.style.backgroundColor = "cyan";
btn.style.width = currentWidth+"px";
btn.style.height = currentHeight+"px";
const randomBtn = (event)=>{
    actionNum++;
    

    if(actionNum%2==0){
        currentColor++;
        if(currentColor>colorList.length){
            currentColor=0;
        }
        btn.style.backgroundColor = colorList[currentColor];
    }else{
        currentWidth+=50;
        currentHeight+=50;
        btn.style.width = currentWidth+"px";
        btn.style.height = currentHeight+"px";
    }
}