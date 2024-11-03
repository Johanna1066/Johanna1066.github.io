//Experience script


const skillsButton = document.getElementById('skillsButton');
const cvButton = document.getElementById('cvButton');
const timelineButton = document.getElementById('timelineButton');

const skillsElement = document.getElementById('skillsElement');
const cvElement = document.getElementById('cvElement');
const timelineElement = document.getElementById('timelineElement');


skillsElement.style.display = "block";
cvElement.style.display = "none";
timelineElement.style.display = "none";
skillsButton.classList.add("active");

skillsButton.addEventListener("click", showSkills);
cvButton.addEventListener("click", showCV);
timelineButton.addEventListener("click", showTimeline);

function showSkills() {
    skillsElement.style.display = "block";
    cvElement.style.display = "none";
    timelineElement.style.display = "none";

    skillsButton.classList.add("active");
    cvButton.classList.remove("active");
    timelineButton.classList.remove("active");
}

function showCV() {
    skillsElement.style.display = "none";
    cvElement.style.display = "block";
    timelineElement.style.display = "none";

    skillsButton.classList.remove("active");
    cvButton.classList.add("active");
    timelineButton.classList.remove("active");
}

function showTimeline() {
    skillsElement.style.display = "none";
    cvElement.style.display = "none";
    timelineElement.style.display = "block";

    skillsButton.classList.remove("active");
    cvButton.classList.remove("active");
    timelineButton.classList.add("active");
}