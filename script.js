const accordion= document.getElementsByClassName('content-box');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);