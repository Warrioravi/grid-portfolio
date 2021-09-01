let dark=false;
document.querySelector("#nightmode").addEventListener('click',(e)=>{
    if(dark){
        e.currentTarget.src = "day.png";
        document.body.style.backgroundColor = "white";
        document.body.style.color="black";
        
    }
    else{
        e.currentTarget.src = "night.png";
        document.body.style.backgroundColor = "rgb(13,17,23)";
        document.body.style.color="#8b949e";
    }
    dark=!dark;
})