SOURCES = {
    "goal1": "https://docs.google.com/document/d/1CvILUZKEmgVupjZXY-42RB31vANwy9KRXD-Qvk1ipBc/edit?usp=sharing",
    "goal2": "https://docs.google.com/document/d/1kt4MWCTob3ttgdgO8hIHEY8lNARWIx1MAHac7EYxuck/edit?usp=sharing",
    "goal3": "https://docs.google.com/document/d/1fTG-8pQcmSi0hVe7g2d5VXM5Wrhqf7pF/edit?usp=sharing&ouid=107514097298431351018&rtpof=true&sd=true",
    "goal4": "https://docs.google.com/document/d/1oY_LVHRf5dKjy1h6p-ewXZWo6Du6Epq25FQvtrmG__4/edit?usp=sharing",
    "goal5": "https://docs.google.com/document/d/1udw_U_x9xTycGfUytd-qCq9O7YKFKeDUMPlq6eIfK-g/edit?usp=sharing"
}
function goal1fetch(id){
    const path = "./goal1.txt";
    fetchFiles(path, id);
}

function goal2fetch(id){
    const path = "./goal2.txt";
    fetchFiles(path, id);
}

function goal3fetch(id){
    const path = "./goal3.txt";
    fetchFiles(path, id);
}

function goal4fetch(id){
    const path = "./goal4.txt";
    fetchFiles(path, id);
}

function goal5fetch(id){
    const path = "./goal5.txt";
    fetchFiles(path, id);
}

function fetchFiles(filePath, id){
    // some code to read the file and make the content to be that
    // Fetch the file content
    fetch(filePath)
    .then((response) => {
    if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return response.text();
    })
    .then((content) => {
    // Display the file content
    const formattedContent = content.replace(/\n/g, '<br>');
    document.getElementById(id).innerHTML = formattedContent;
    })
    .catch((error) => {
    console.error(error);
    document.getElementById(id).innerHTML = "Error fetching file.";
    });
}

const content = new Map();
// setting the elements to have the goal name, sub title, and the function that would call the fetching file
const goal1 = "Goal 1: Rhetorical Awareness";
const goal1Sub = "Learn strategies for analyzing texts’ audiences, purposes, and contexts as a means of developing facility in reading and writing.";
content.set(goal1, [goal1Sub, goal1fetch]);

const goal2 = "Goal 2: Critical Thinking and Composing";
const goal2Sub = "Use reading and writing for purposes of critical thinking, research, problem solving, action, and participation in conversations within and across different communities.";
content.set(goal2, [goal2Sub, goal2fetch])

const goal3 = "Goal 3: Conventions";
const goal3Sub = "Understand conventions as related to purpose, audience, and genre, including such areas as mechanics, usage, citation practices, as well as structure, style, graphics, and design.";
content.set(goal3, [goal3Sub, goal3fetch]);

const goal4 = "Goal 4: Revision";
const goal4Sub = "Understand composing processes as flexible and collaborative, drawing upon multiple strategies.";
content.set(goal4, [goal4Sub, goal4fetch]);

const goal5 = "Goal 5: Reflection";
const goal5Sub = "Use meaningful, ongoing reflection to inform writing processes, foster the development of a writing identity, and think ahead to future writing situations.";
content.set(goal5, [goal5Sub, goal5fetch])

function getHTMLCode(goalName, goalCollection){
    const goalSub = goalCollection[0];
    const goalNum = goalName[5];
    const goalContent = goalCollection[1];
    const src = SOURCES[`goal${goalNum}`]
    let content = `<h3>${goalName}</h3>
                   <hr>
                   <h5>${goalSub}</h5>
                   <hr>
                   <p id="goal${goalNum}"></p>
                   <br>
                   <img class="goalPic" src="./goal${goalNum}-meme.jpeg"><br>
                   <a href="${src}">
                    <button class="sourceBtn">
                        Check the Source
                    </button>
                   </a>`;
    goalContent("goal"+goalNum);
    return content;
}

window.onload = ()=>{
    const boxesList = document.getElementsByClassName("textBox");
    console.log(boxesList.length)
    let i = 0;
    for (let [goal, goalCollection] of content){
        let currentBox = boxesList[i];
        let currentHTMLContent = getHTMLCode(goal, goalCollection);
        currentBox.innerHTML = currentHTMLContent;
        i++;
    }
};