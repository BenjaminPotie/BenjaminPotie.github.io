/* --------------------------------- CURSOR --------------------------------- */
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".dot");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY-20)+"px; left: "+(e.pageX-20)+"px;");
})
var links = document.querySelectorAll("a");

for (var i=0; i<links.length; i++) {
    links[i].addEventListener("mouseenter", e => {
            dot.style.border="15px solid #2020203a";
            dot.style.top="2px";
            dot.style.left="2px";
        });
    links[i].addEventListener("mouseleave", e => {
        dot.style.border="3px solid #202020";
        dot.style.top="14px";
        dot.style.left="14px";
        });
}

/* -------------------------------- IMG + TXT ------------------------------- */
var img = document.querySelectorAll(".container a");

for (var i=0; i<img.length; i++) {
    img[i].addEventListener("mouseenter", myMouseOver);
    img[i].addEventListener("mouseleave", myMouseOut);
}

function myMouseOver (event) {
    event.stopPropagation();
    var image = event.target.querySelector("img");
    image.style.opacity = "5%";

    var texte = event.target.querySelector(".txt");
    texte.style.display ="block";
}

function myMouseOut (event) {
    event.stopPropagation();
    var image = event.target.querySelector("img");
    image.style.opacity = "100%";

    var texte = event.target.querySelector(".txt");
    texte.style.display ="none";
}
