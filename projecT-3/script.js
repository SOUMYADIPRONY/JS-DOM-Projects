let  main = document.querySelector("#main");
let crsor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(sd){
    crsor.style.left = sd.x + "px"
    crsor.style.top = sd.y+ "px"
})