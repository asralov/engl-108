function changeBorders(color){
    const textBox = document.getElementsByClassName('textBox');
    for (let i = 0; i < textBox.length; i++){
        textBox[i].style.borderColor = color;
        changeHR(color);
    }
}

function changeHR(color){
    let hrBox = document.getElementsByTagName('hr');
    for (let i = 0; i < hrBox.length; i++){
        hrBox.style.backgroundColor = color;
    }
   
}


// using darkMode to be true since the default mode is dark
let darkMode = true;
const btn = document.getElementById("changeModeBtn");
const con = document.getElementById("content");
function changeMode(){
    // if it is not a dark mode and user wants a black mode
    if (!darkMode){
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "green";
        changeBorders("green");
        // then updating that it is not a light mode anymore
        darkMode = true;
    } else {
        // else case when it is a dark mode and user wants a light mode
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "black";
        changeBorders("black");
        darkMode = false;
    }
}

btn.addEventListener('click', changeMode);