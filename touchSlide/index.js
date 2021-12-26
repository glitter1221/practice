let aside = document.getElementById("aside");
let asideButton = document.getElementById("asideButton");

console.log(aside);

let asideToggle = asideButton.addEventListener('click',() => {
    if(aside.style.left == "-100%") {
        aside.style.left = "0%";
    }
});

let asideCancel = document.getElementById("asideCancel");

let asideHide = asideCancel.addEventListener('click', () => {
    aside.style.left = "-100%";
});