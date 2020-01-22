const $ = document.querySelector.bind(document);
/* --------------------------------- CURSOR --------------------------------- */
const follow = document.querySelector(".circle");
follow.style.display = "none";

function followMouse(e){
    let x=e.x, y=e.y;
    follow.style.transform=`matrix(1,0,0,1,${x},${y})`;
    if(e.target.nodeName=='A' || e.target.parentNode.nodeName=='A'){
        follow.classList.add('circleH');
    }
    else {
        follow.classList.remove('circleH');
    }
}

window.onresize = onResize;

function onResize(){
if (window.innerWidth>1024) {
    follow.style.display = "block";
document.addEventListener("mousemove",followMouse);
} else {
    follow.style.display = "none";
    document.removeEventListener("mousemove",followMouse);
    
}
}
onResize();