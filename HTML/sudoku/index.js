var startBtn = document.querySelector("#startBtn");
var startContainer = document.querySelector(".startContainer");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function startGame(event){
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input)=>{
        input.value = getRandomInt(1,10);
    })

    startContainer.style.display = "none";


}

function resetGame(event){
    window.location.reload();
}

function submitGame(event){
    let cells = document.querySelectorAll(".outer-cell");
    let rule1 = checkRule(cells);
    let rule2 = checkHorizontal(cells);
    let rule3 = checkVertical(cells);

    if(rule1&&rule2&&rule3){
        alert("You Won");
    }else{
        alert("You Lost!")
    }
}

function checkRule(cells){
    let status = true;
    cells.forEach((element)=>{
        let inputs = element.querySelectorAll("input");
        let values = [];
        inputs.forEach((input)=>{
            if(values.includes(input.value)){
                status = false;
                input.style.backgroundColor = "red";
                input.style.color = "white";
                return status;
            }else{
                values.push(input.value);
            }
        })

    if(status){
        inputs.forEach((input)=>{
            input.style.backgroundColor = "green";
        input.style.color = "white";
        })
    }
    })

    return status;
}

function checkHorizontal(cells){
    let collection1 = cells.slice(0,3);
    let collection2 = cells.slice(3,6);
    let collection3 = cells.slice(6,9);


}

function getHorizontalvalues(collection){
    let row1 = [];
    let row2 = [];
    let row3 = [];

    collection.forEach((cell)=>{
        let inputs = cell.querySelector("input");
        inputs.forEach((input,index)=>{
            if(index>=0&&index<=2){
                row1.push(input.value);
            }else if(index>=3&&index<=5){
                row2.push(input.value);
            }else{
                row3.push(input.value);
            }
        })
    })


}

function checkVertical(cells){

}

function getVerticalvalues(){

}

function checkDuplicates(arr){
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

    if(duplicates.length>0){
        return false;
    }else{
        return true;
    }
}