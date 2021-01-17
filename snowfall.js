function createSnow()
{
    let snow = document.createElement("i");
    snow.className = "fas fa-snowflake";
    document.body.appendChild(snow);
    snow.style.animationDuration = Math.random()*2+5+"s";
    snow.style.left = Math.random()*100 + "vw";
    snow.style.zIndex = 2;
     setTimeout(()=>{
         snow.remove();
     },5000);
     
}
setInterval(createSnow,100);
