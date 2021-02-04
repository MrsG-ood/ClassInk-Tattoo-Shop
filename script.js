const burger = document.getElementById("burger");
const mobileLinks = document.getElementById("mobileNavList");
const close = document.getElementById("close");
const logo = document.getElementById("logoText");


function openNav() { 
    mobileLinks.style.display = "block";
    burger.style.display = "none";
    logo.style.display = "none";
};

function closeNav() { 
    mobileLinks.style.display = "none";
    burger.style.display = "block";
    logo.style.display = "flex";
};
close.addEventListener("click", closeNav);

burger.addEventListener("click", openNav);





