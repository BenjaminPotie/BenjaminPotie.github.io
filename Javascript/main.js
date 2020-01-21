const $ = document.querySelector.bind(document);
/* --------------------------------- CURSOR --------------------------------- */
const follow = document.querySelector(".circle");

document.addEventListener("mousemove",followMouse);
function followMouse(e){
    let x=e.x, y=e.y;
    follow.style.transform=`matrix(1,0,0,1,${x},${y})`;
    if(e.target.nodeName=='A' || e.target.parentNode.nodeName=='A'){
        follow.classList.add('circleH');
    }else{
        follow.classList.remove('circleH');
    }
}
document.body.innerHTML = navigator.userAgent;