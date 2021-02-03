//          to add to uinner html on click of. .burger
    //    < !-- < div class="close" >
// {/* <i class="far fa-times-circle"></i>
// </div> --> */}
// Notes: when .menu is clicked change display of nav and navList to flex. 
// When menu is clicked show .close as above. 
// when .close is clicked hide display of nav.


// closes mobile navigation menu (display:none)
function closeme() { 
    const close = document.querySelector("close");
    document.getElementsByClassName('navList').style.display= "none";

}

// opens mobile navigation menue (display:block)
// when.buger is clicked: 
//     mobile display is set to block &&
//         innerHTML is added for the close 
function openme() { 
    document.getElementById("close").innerHTML += 
        '<i class="far fa-times-circle"></i>';
    document.querySelector('buger').style.display = 'none';
    document.querySelector('logo').style.display = 'none';
    document.querySelector('navList').style.display= "flex";
}


// .active class with display of block for navlist- use javascript to
// toggle from .active use .active or active class to use when 
// .openme is active