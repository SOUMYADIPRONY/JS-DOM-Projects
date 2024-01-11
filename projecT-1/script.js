var frndstatus = document.querySelector("h5");


var addFriend = document.querySelector("#add");

var check = 0;


addFriend.addEventListener("click", function(){

    if(check==0){

    
    frndstatus.innerHTML = "Friends";
    frndstatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend"
    check = 1;
} else{
    frndstatus.innerHTML = "Stranger";
    frndstatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    check = 0;
}
})

// let removeFriend = document.querySelector("#remove");

// removeFriend.addEventListener("click",function(){
//     frndstatus.innerHTML = "Stranger";
//     frndstatus.style.color  = "red";
// })