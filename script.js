const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_options");
const onClick = document.querySelectorAll(".nav_item")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
} 
for (i = 0; i < onClick.length;i++) {
        onClick[i].addEventListener("click", closeham);
    }

function closeham(){
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
}