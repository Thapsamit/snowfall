function createHeart()
{
    let heart = document.createElement("i");
    heart.className = "fas fa-snowflake";
    document.body.appendChild(heart);
    heart.style.animationDuration = Math.random()*2+5+"s";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.zIndex = 2;
     setTimeout(()=>{
         heart.remove();
     },5000);
     
}
setInterval(createHeart,100);