/* --------------------------------- CURSOR --------------------------------- */
const follow = document.querySelector(".circle");

document.addEventListener("mousemove",followMouse);
function followMouse(e){
    let x=e.x, y=e.y;
    follow.style.transform=`matrix(1,0,0,1,${x},${y})`;
    if(e.target.nodeName=='A' || e.target.parentNode.nodeName=='A' || e.target.nodeName=='.TXT'){
        follow.classList.add('circleH');
    }else{
        follow.classList.remove('circleH');
    }
}

/* -------------------------------- IMG + TXT ------------------------------- */
// var img = document.querySelectorAll(".container a");

// for (var i=0; i<img.length; i++) {
//     img[i].addEventListener("mouseenter", myMouseOver);
//     img[i].addEventListener("mouseleave", myMouseOut);
// }

// function myMouseOver (event) {
//     event.stopPropagation();
//     var image = event.target.querySelector("img");
//     image.style.opacity = "0.05";

//     var texte = event.target.querySelector(".txt");
//     texte.style.display ="block";
// }

// function myMouseOut (event) {
//     event.stopPropagation();
//     var image = event.target.querySelector("img");
//     image.style.opacity = "1";

//     var texte = event.target.querySelector(".txt");
//     texte.style.display ="none";
// }
