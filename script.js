// when screen is =- than 992px
// show burger icon
// when burger icon is active - add .burger-active
// classList to show navList & .close icon
// when .closer icon is clicked remove active classList on navList
// and .buger

// close buger menu 
// const bugerOpenNav = document.querySelector('.burger-openNav');
// show navList
// 
// const burger = document.getElementById('burger');
// show close icon from font awesome

// const closeIcon = document.querySelector('.far-active');

// burger.addEventListener("click", function () {
//     // console.log( "This is a test");
// //    mobileNav.classList.add("navList-active", "far-active","burger-openNav");
//     mobileNav.style.display = "flex"; //shows navList
//     burger.style.display = "none"; //removes burger icon
//     close.style.display = "block";
// });

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('navList');
const close = document.getElementById('close');
const logo = document.getElementById('logoText');

function closeNav(){
    mobileNav.style.display = "none";
    burger.style.display = "block";
    logo.style.display = "flex";
}
function openNav() { 
            mobileNav.style.display = "flex"; //shows navList and close icon
            burger.style.display = "none"; //removes burger icon
            logo.style.display = "none"; //removes logo
}
close.addEventListener("click", closeNav, false);
burger.addEventListener("click", openNav, false);



