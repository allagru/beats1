let burger = document.querySelector(".burger");
let hideMenu = document.querySelector(".hide-menu");
let hideMenuClose = document.querySelector(".hide-menu__close");

burger.addEventListener("click", function(event){
    if(event){
        hideMenu.style.display = "block";
    }  
})

hideMenuClose.addEventListener("click", function(event){
    if(event){
        hideMenu.style.display = "none";
    }
})
