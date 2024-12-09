let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(link => {
                link.classList.remove(`active`);
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}


menuIcon.onclick = ( function() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle(`active`);
})