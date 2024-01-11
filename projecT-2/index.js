var con = document.querySelector("#container");
var heart = document.querySelector("i");

con.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%, -50%) scale(2)";
    heart.style.opacity = 0.8;
    setTimeout(function(){
        heart.style.transform = "translate(-50%, -50%) scale(0)";

    }, 2500);

    setTimeout(function(){
            heart.style.opacity= 0;
    }, 1000)

    
})

