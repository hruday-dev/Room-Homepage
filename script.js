const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const main_image = document.getElementById('hero-img');
const content = document.querySelectorAll('article');

let index = 0;
function fadeOut(el) {
    el.classList.remove("show");
    el.classList.add("fade");
}

function fadeIn(el) {
    el.classList.remove("fade");
    el.classList.add("show");
}

function updateSlide() {
    fadeOut(main_image);
    fadeOut(content[index]);
    setTimeout(() => {

        index = (index + 3) % 3;

        
        main_image.src = `./images/desktop-image-hero-${index + 1}.jpg`;

        content.forEach(c => c.style.display = "none");
        content[index].style.display = "block";
        void main_image.offsetWidth;

        fadeIn(main_image);
        fadeIn(content[index]);

    }, 300);
}

// Right arrow →
arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index + 1) % 3;   
    updateSlide();
});

// Left arrow ←
arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index - 1 + 3) % 3; 
    updateSlide();
});

// menu
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
 
menu.style.display='none';
menuOpen.addEventListener('click',(e)=>{
    menu.style.display='flex';
})
menuClose.addEventListener('click',(e)=>{
    menu.style.display='none';
})
