// using darkMode to be true since the default mode is dark
let darkMode = true;
const btn = document.getElementById("changeModeBtn");

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
}

btn.addEventListener('click', changeMode);
