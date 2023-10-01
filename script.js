const mydiv = document.getElementById("container");
const btn = document.getElementById("btn1");
const bodyElement = document.getElementById("body");
const div2 = document.getElementById("container2")

function myfunc(){
    const color = bodyElement.style.backgroundColor;
    if(color == "white"){
        mydiv.style.backgroundColor = "#FFBB5C";
        bodyElement.style.backgroundColor = "orange";
        div2.style.backgroundColor = "#FFBB5C"
    }
    else if (color == "orange"){
        mydiv.style.backgroundColor = "#9D76C1";
        bodyElement.style.backgroundColor = "purple";
        div2.style.backgroundColor = "#9D76C1"
    }
    else if (color == "purple"){
        mydiv.style.backgroundColor = "#3A3845";
        bodyElement.style.backgroundColor = "black";
        div2.style.backgroundColor = "#3A3845"
    }
    else if (color == "black"){
        mydiv.style.backgroundColor = "#8DDFCB";
        bodyElement.style.backgroundColor = "teal";
        div2.style.backgroundColor = "#8DDFCB"
    }
    else if (color == "teal"){
        mydiv.style.backgroundColor = "#6499E9";
        bodyElement.style.backgroundColor = "#0079FF";
        div2.style.backgroundColor = "#6499E9"
    }
    else{
        mydiv.style.backgroundColor = "#e9e9e9";
        bodyElement.style.backgroundColor = "white";
        div2.style.backgroundColor = "#e9e9e9";
    }
}
btn.addEventListener("click", myfunc);
