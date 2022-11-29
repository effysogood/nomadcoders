const header = document.querySelector(".header");
const title = document.querySelector(".header:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "white";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() { 
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Copier!");
}

function handleWindowOnline() {
    alert("SOS! NO WIFI!");
}

function handleWindowOffline() {
    alert("ALL GOOD!");
}

title.addEventListener("click", handleTitleClick);
//title.onClick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);  
title.addEventListener("mouseleave", handleMouseLeave);  

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);