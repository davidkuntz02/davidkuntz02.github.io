console.log("im in");
const toggle = document.getElementById("display-toggle");
const body = document.getElementsByTagName("body")[0];

console.log("good so far");
toggle.onclick = function(){
    console.log("script worked");
    body.classList.toggle("dark");
    toggle.innerText == "Light mode"?
    toggle.innerText = "Dark mode": toggle.innerText = "Light mode";
}
