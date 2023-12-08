// using darkMode to be true since the default mode is dark
let darkMode = true;
const btn = document.getElementById("changeModeBtn");
const sourceBtns = document.getElementsByClassName("sourceBtn");

function changeMode() {
    // Toggle the darkMode variable
    darkMode = !darkMode;

    // Update body background and text color
    document.body.style.backgroundColor = darkMode ? "#444" : "#bbb";
    document.body.style.color = darkMode ? "#fff" : "#000"; // Adjust text color here

    // Update border color and background color for .textBox elements
    const textBox = document.getElementsByClassName('textBox');
    for (let i = 0; i < textBox.length; i++) {
        textBox[i].style.borderColor = darkMode ? "#fff" : "#000"; // Adjust border color here

        // Update background color with linear gradient
        textBox[i].style.background = darkMode
            ? "linear-gradient(#111, #333, #111)"
            : "linear-gradient(#ccc, #fff, #ccc)";
    }

    // Update hr elements background color
    const hrBox = document.getElementsByTagName('hr');
    for (let i = 0; i < hrBox.length; i++) {
        hrBox[i].style.backgroundColor = darkMode ? "#fff" : "#000"; // Adjust hr background color here
    }

    // Update image border color
    const goalPic = document.getElementsByClassName('goalPic');
    for (let i = 0; i < goalPic.length; i++) {
        goalPic[i].style.border = darkMode ? "solid 1px #fff" : "solid 1px #000"; // Adjust image border color here
    }

    // Update check artifact buttons styling
    for (let i = 0; i < sourceBtns.length; i++) {
        sourceBtns[i].style.backgroundColor = darkMode ? "#333" : "#fff"; // Adjust button background color here
        sourceBtns[i].style.color = darkMode ? "#fff" : "#000"; // Adjust button text color here

        // Add hover effect
        sourceBtns[i].addEventListener('mouseover', () => {
            sourceBtns[i].style.backgroundColor = darkMode ? "#fff" : "#333";
            sourceBtns[i].style.color = "#fff";
        });

        sourceBtns[i].addEventListener('mouseout', () => {
            sourceBtns[i].style.backgroundColor = darkMode ? "#333" : "#fff";
            sourceBtns[i].style.color = darkMode ? "#fff" : "#000";
        });
    }
}

btn.addEventListener('click', changeMode);
