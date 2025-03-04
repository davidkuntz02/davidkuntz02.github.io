//script for dark mode functionality across pages
const toggel = document.getElementById("display-toggle");
const body = document.body;

console.log("good so far");
toggel.onclick = function(){
    body.classList.toggle("dark");
    toggel.innerText == "Light mode"?
    toggel.innerText = "Dark mode": toggel.innerText = "Light mode";
}
