const header = document.querySelector(".header");
const title = document.querySelector(".header:first-child h1");

function handleTitleClick() {
  title.classList.toggle("clicked");
}

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (title.classList.contains(clickedClass)) {
//     title.classList.remove(clickedClass);
//   } else {
//     title.classList.add(clickedClass);
//   }
// }

title.addEventListener("click", handleTitleClick);
