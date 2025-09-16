let body = document.querySelector("body");
let button = document.querySelector(".change-theme-button");
let content = document.querySelector(".content")
function changeTheme () {
    body.classList.toggle("dark-theme");
}
button.addEventListener("click", changeTheme);