const accordion= document.getElementsByClassName('content-box');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


const allDots = document.querySelectorAll('.about-dot, .portfolio-dot, .dot');


allDots.forEach(dot => {
    dot.addEventListener('click', () => {
        
        const targetId = dot.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
       
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

